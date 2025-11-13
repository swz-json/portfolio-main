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

export async function sendEmailAction(
  values: TFormSchema
): Promise<SendEmailResult> {
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) return { success: false, error: 'Invalid form data' };

  // TODO: send with your provider later
  return {
    success: true,
    message: 'Thanks for your message! (Email sending is disabled in this build.)',
  };
}

