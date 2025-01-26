import eventEmitter from "@/lib/eventEmitter";
import {QuoteRequest} from "@prisma/client";
import {sendEmail} from "@/lib/emailService";

eventEmitter.on("quoteRequest.created", async (quoteRequest: QuoteRequest) => {
    try {
        const emailContent = {
            to: "admin@example.com",
            from: process.env.EMAIL_FROM as string,
            subject: `Nouvelle demande de devis de l'entreprise ${quoteRequest.company}`,
            text: `
                Vous avez une nouvelle demande de devis. Voici les détails :
                
                - Entreprise : ${quoteRequest.company}
                - Nom : ${quoteRequest.name}
                - Fonction : ${quoteRequest.function}
                - Email : ${quoteRequest.email}
                - Téléphone : ${quoteRequest.phone}
                - Date de création : ${quoteRequest.createdAt.toLocaleString()}
                
                Merci de traiter cette demande dès que possible.
            `,
        };

        await sendEmail(emailContent);
    } catch (error) {
        console.error("Error sending email:", error);
    }
});