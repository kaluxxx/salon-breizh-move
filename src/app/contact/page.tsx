import ContactHero from "@/app/contact/_component/ContactHero";
import ContactInfo from "@/app/contact/_component/ContactInfo";
import ContactContent from "@/app/contact/_component/ContactContent";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <ContactHero />
            <ContactInfo />
            <ContactContent />
        </div>
    )
}

