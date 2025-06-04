
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, inquiry } = body;
    const toEmail = 'ajmanza98@gmail.com'; // El correo electrónico de destino

    if (!name || !email || !inquiry) {
      return new Response(JSON.stringify({ message: 'Nombre, correo electrónico y consulta son obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Simulación de la lógica de envío de correo
    // En un entorno de producción, aquí integrarías un servicio de envío de correos.
    console.log('--- Nueva Solicitud de Contacto ---');
    console.log(`Para: ${toEmail}`);
    console.log(`De: ${name} <${email}>`);
    if (phone) {
      console.log(`Teléfono: ${phone}`);
    }
    console.log('Consulta:');
    console.log(inquiry);
    console.log('------------------------------------');

    // Ejemplo de cómo podrías estructurar el cuerpo del correo (esto no se envía realmente aquí):
    // const emailSubject = `Nueva consulta de ${name} - Pixel Remoto`;
    // const emailBody = `
    //   <p>Has recibido una nueva consulta a través del formulario de contacto de Pixel Remoto:</p>
    //   <ul>
    //     <li><strong>Nombre:</strong> ${name}</li>
    //     <li><strong>Correo Electrónico:</strong> ${email}</li>
    //     <li><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</li>
    //     <li><strong>Consulta:</strong></li>
    //   </ul>
    //   <p>${inquiry.replace(/\n/g, '<br>')}</p>
    // `;

    // Aquí llamarías a tu servicio de envío de correo, por ejemplo:
    // await sendEmailService.send({
    //   to: toEmail,
    //   from: 'Pixel Remoto <noreply@tu dominio.com>', // Deberías usar un correo de tu dominio
    //   subject: emailSubject,
    //   html: emailBody,
    // });

    return new Response(JSON.stringify({ message: 'Mensaje recibido con éxito. Nos pondremos en contacto pronto.' }), {
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
