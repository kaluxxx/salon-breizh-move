import {Separator} from "@/components/ui/separator";
import ThematicsSection from "@/app/en-bref/_component/ThematicsSection";
import PresentationSection from "@/app/en-bref/_component/PresentationSection";

export default function Page() {
    return (
        <>
            <PresentationSection/>
            <Separator className="max-w-lg mx-auto my-16 h-2 bg-secondary rounded-lg"/>
            <ThematicsSection/>
        </>
    )
}