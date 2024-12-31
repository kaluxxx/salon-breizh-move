import eventEmitter from "@/lib/eventEmitter";
import { sendEmail } from "@/lib/emailService";
import {Contact} from "@prisma/client";

eventEmitter.on("contact.created", async (contact: Contact) => {
    try {
        console.log("Sending email to admin");
        const emailContent = {
            to: "admin@example.com",
            from: process.env.EMAIL_FROM as string,
            subject: `Nous avons reçu un nouveau message de ${contact.firstName} ${contact.lastName}`,
            text: `Message: ${contact.message}`,
        };

        await sendEmail(emailContent);

    } catch (error) {
        console.error("Error sending email:", error);
    }
});
