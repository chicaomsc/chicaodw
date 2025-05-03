import emailjs from "@emailjs/browser";

export const sendContactEmailService = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  console.log("PUBLIC_KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

  return emailjs.send(
    serviceID,
    templateID,
    {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    },
    publicKey
  );
};

export const sendConfirmationEmailService = async (
  toName: string,
  toEmail: string,
  toSubject: string
) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONFIRMATION_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  return emailjs.send(
    serviceID,
    templateID,
    {
      to_name: toName,
      to_email: toEmail,
      subject: toSubject,
    },
    publicKey
  );
};
