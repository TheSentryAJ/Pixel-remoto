
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'ajmanza98@gmail.com';
// Para pruebas iniciales, Resend permite usar 'onboarding@resend.dev' como remitente.
// Para producción, deberías verificar tu dominio en Resend y usar una dirección de tu dominio.
const fromEmail = 'Pixel Remoto <onboarding@resend.dev>';


export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Error: La variable de entorno RESEND_API_KEY no está configurada.');
    return new Response(JSON.stringify({ message: 'Error de configuración del servidor para enviar correos.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, phone, inquiry } = body;

    if (!name || !email || !inquiry) {
      return new Response(JSON.stringify({ message: 'Nombre, correo electrónico y consulta son obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailSubject = `Nueva consulta de ${name} - Pixel Remoto`;
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
            <h2>Nueva Solicitud de Contacto - Pixel Remoto</h2>
            <p>Has recibido una nueva consulta a través del formulario de contacto de Pixel Remoto:</p>
            <ul>
              <li><strong>Nombre:</strong> ${name}</li>
              <li><strong>Correo Electrónico:</strong> ${email}</li>
              <li><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</li>
            </ul>
            <div class="inquiry">
              <strong>Consulta:</strong>
              <p>${inquiry.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail], // Resend espera un array de strings para 'to'
      subject: emailSubject,
      html: emailHtmlBody,
      reply_to: email, // Para que al responder, se responda al cliente
    });

    if (error) {
      console.error('Error al enviar correo con Resend:', error);
      return new Response(JSON.stringify({ message: 'Error al enviar el mensaje.', error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Correo enviado con éxito:', data);
    return new Response(JSON.stringify({ message: 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error al procesar la solicitud de contacto:', error);
    let errorMessage = 'Error interno del servidor al procesar el mensaje.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new Response(JSON.stringify({ message: 'Error al procesar la solicitud.', error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
