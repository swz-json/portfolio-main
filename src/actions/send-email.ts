'use server';

import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  message: z.string().min(1),
});

export type TFormSchema = z.infer<typeof formSchema>;

export type SendEmailResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function sendEmailAction(formData: FormData): Promise<SendEmailResult> {
  const values = {
    email: String(formData.get('email') ?? ''),
    name: String(formData.get('name') ?? ''),
    message: String(formData.get('message') ?? ''),
  };

  const parsed = formSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data' };
  }

  // TODO: integrate provider (Resend, etc.)
  return {
    success: true,
    message: 'Thanks for your message! (Email sending is disabled in this build.)',
  };
}

