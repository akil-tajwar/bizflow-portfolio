'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
console.log('API Key exists:', !!process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  // Validate required fields
  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Please fill in all required fields',
    }
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['mohi.khan@gmail.com'],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })
    console.log("🚀 ~ sendEmail ~ data:", data)

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send message',
    }
  }
}
