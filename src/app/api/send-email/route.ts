
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const RESEND_API_KEY = 're_CLRS22Qr_5Vg48kohWCgPHZfnXy3poNR5'; 
const toEmail = 'ajmanza98@gmail.com';
const fromEmail = 'Antonio J. (Soporte Web) <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, inquiry } = body; 

    if (!name || !email || !inquiry) {
      return new Response(JSON.stringify({ message: 'Nombre, correo electrónico y descripción del problema son obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailSubject = `Nueva Solicitud de Soporte de: ${name}`;
    
    const formattedInquiry = inquiry.replace(/\n/g, '<br>');
    
    const emailHtmlBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: 20px auto; }
            h2 { color: #007bff; }
            ul { list-style-type: none; padding: 0; }
            li { margin-bottom: 10px; }
            strong { color: #555; }
            .inquiry { margin-top: 15px; padding: 10px; background-color: #f9f9f9; border: 1px solid #eee; border-radius: 3px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Nueva Solicitud de Soporte Técnico</h2>
            <p>Has recibido una nueva solicitud de soporte a través de tu web personal:</p>
            <ul>
              <li><strong>Nombre:</strong> ${name}</li>
              <li><strong>Correo Electrónico:</strong> ${email}</li>
            </ul>
            <div class="inquiry">
              <strong>Descripción del Problema/Consulta:</strong>
              <p>${formattedInquiry}</p>
            </div>
            <p style="margin-top: 20px; font-size: 0.9em; color: #777;">Este correo fue enviado desde el formulario de contacto de tu web.</p>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: emailSubject,
        html: emailHtmlBody,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Error al enviar correo con Resend:', errorData);
      return new Response(JSON.stringify({ 
        message: 'Error al enviar la solicitud de soporte.', 
        error: errorData.message || 'Error desconocido' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await emailResponse.json();
    console.log('Correo de soporte enviado con éxito:', data);
    
    return new Response(JSON.stringify({ 
      message: 'Solicitud de soporte enviada con éxito. Me pondré en contacto contigo pronto.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error al procesar la solicitud de soporte:', error);
    let errorMessage = 'Error interno del servidor al procesar la solicitud.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new Response(JSON.stringify({ 
      message: 'Error al procesar la solicitud.', 
      error: errorMessage 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
