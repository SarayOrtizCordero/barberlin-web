import nodemailer from "nodemailer";
import { SITE } from "./constants";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ethereal.email",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!process.env.SMTP_USER) {
    console.log("Email not configured. Would send:", { to, subject });
    return;
  }
  await transporter.sendMail({
    from: `"${SITE.name}" <${process.env.SMTP_FROM || "noreply@barberlin.com"}>`,
    to,
    subject,
    html,
  });
}

export function bookingConfirmationEmail(data: {
  name: string;
  service: string;
  date: string;
  time: string;
}) {
  return {
    subject: `Turno confirmado en ${SITE.name}`,
    html: `
      <h1>¡Turno confirmado!</h1>
      <p>Hola ${data.name},</p>
      <p>Tu turno ha sido confirmado exitosamente.</p>
      <ul>
        <li><strong>Servicio:</strong> ${data.service}</li>
        <li><strong>Fecha:</strong> ${data.date}</li>
        <li><strong>Horario:</strong> ${data.time}</li>
      </ul>
      <p>Recordá que podés cancelar con 24 horas de anticipación.</p>
      <p>¡Te esperamos!</p>
      <p><strong>${SITE.owner}</strong><br>${SITE.name}</p>
    `,
  };
}

export function leadEmail(data: { name: string; email: string }) {
  return {
    subject: `Nuevo lead en ${SITE.name}`,
    html: `
      <h1>¡Nuevo lead captado!</h1>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `,
  };
}
