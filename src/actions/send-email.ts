'use server';

import { z } from 'zod';
// On ne charge plus Resend ni de clé API

const contactFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  message: z.string().min(10),
});

export async function sendEmailAction(formData: FormData) {
  const parsed = contactFormSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: 'Invalid form data',
    };
  }

  // Pour l’instant on log juste dans la console serveur
  console.log('Contact form submission:', parsed.data);

  return {
    success: true,
    message:
      'Thanks for your message! (Email sending is disabled in this local version.)',
  };
}
