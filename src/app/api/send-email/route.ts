
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const RESEND_API_KEY = 're_CLRS22Qr_5Vg48kohWCgPHZfnXy3poNR5'; // Recuerda manejar esto de forma segura, idealmente con variables de entorno
const toEmail = 'ajmanza98@gmail.com';
const fromEmail = 'Antonio J. <onboarding@resend.dev>'; // Cambiado para reflejar un tono más personal

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // El formulario ahora envía 'message', pero la API sigue esperando 'inquiry'.
    // Si se cambió en el form a 'message', aquí se debería leer 'message' o mapear.
    // Asumimos que el form envía 'inquiry' o que el mapeo se hizo en el componente del formulario.
    const { name, email, inquiry } = body; // 'phone' ha sido eliminado

    if (!name || !email || !inquiry) {
      return new Response(JSON.stringify({ message: 'Nombre, correo electrónico y mensaje son obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailSubject = `Nuevo mensaje de ${name} - Contacto desde mi web`; // Tono más personal
    
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
            <h2>Nuevo Mensaje de Contacto</h2>
            <p>Has recibido un nuevo mensaje a través del formulario de contacto de mi web:</p>
            <ul>
              <li><strong>Nombre:</strong> ${name}</li>
              <li><strong>Correo Electrónico:</strong> ${email}</li>
              {/* Teléfono eliminado */}
            </ul>
            <div class="inquiry">
              <strong>Mensaje:</strong>
              <p>${formattedInquiry}</p>
            </div>
            <p style="margin-top: 20px; font-size: 0.9em; color: #777;">Este correo fue enviado desde el formulario de contacto de tu web personal.</p>
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
        message: 'Error al enviar el mensaje.', 
        error: errorData.message || 'Error desconocido' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await emailResponse.json();
    console.log('Correo enviado con éxito:', data);
    
    return new Response(JSON.stringify({ 
      message: 'Mensaje enviado con éxito. Me pondré en contacto pronto.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error al procesar la solicitud de contacto:', error);
    let errorMessage = 'Error interno del servidor al procesar el mensaje.';
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
