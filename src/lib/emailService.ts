import { createTransport } from "nodemailer";
import {VerificationRequestParams} from "@/types/payloads/VerificationRequestParams";

interface EmailParams {
    to: string;
    from: string;
    subject: string;
    text?: string;
    html?: string;
}

export async function sendEmail({ to, from, subject, text, html }: EmailParams) {
    const transport = createTransport({
        host: process.env.EMAIL_SERVER,
        port: Number(process.env.EMAIL_PORT),
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const result = await transport.sendMail({
        to,
        from,
        subject,
        text,
        html,
    });

    const failed = result.rejected.concat(result.pending).filter(Boolean);
    if (failed.length) {
        throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
    }
}

export async function sendVerificationRequest({ identifier, url, provider }: VerificationRequestParams) {
    const { from } = provider;
    const host = new URL(url).host
    const subject = `Se connecter à ${host}`;
    const text = `Pour vous connecter, cliquez sur le lien ci-dessous :\n${url}`;
    const html = generateLoginEmailHtml(url, host);

    await sendEmail({ to: identifier, from, subject, text, html });
}

function generateLoginEmailHtml(url: string, host: string): string {
    return `
        <div>
            <h1 class="text-3xl text-red-500">Bonjour,</h1>
            <p>Pour vous connecter, cliquez sur le lien ci-dessous :</p>
            <a href="${url}">Se connecter</a>
            <p>Si vous n'avez pas demandé cette connexion, ignorez cet e-mail.</p>
            <p>Merci,<br/>L'équipe ${host}</p>
        </div>
    `;
}
