import eventEmitter from "@/lib/eventEmitter";
import { sendEmail } from "@/lib/emailService";
import {BadgeRequest} from "@prisma/client";

eventEmitter.on("badgeRequest.created", async (badgeRequest: BadgeRequest) => {
    try {
        console.log("Sending email to admin");
        const emailContent = {
            to: "admin@example.com",
            from: process.env.EMAIL_FROM as string,
            subject: `Nous avons reçu une nouvelle demande de badge de ${badgeRequest.name}`,
            text: `Nom: ${badgeRequest.name}\nEmail: ${badgeRequest.email}\nMessage: ${badgeRequest.company} - ${badgeRequest.jobTitle}`,
        };

        await sendEmail(emailContent);

    } catch (error) {
        console.error("Error sending email:", error);
    }
});
