import StepTitle from "@/components/stepTitle";
import {headers} from "next/headers";

export default function Steps() {
    const headerList = headers();
    const pathname = headerList.get("x-pathname");
    return (
        <div
            className="flex flex-col md:flex-row h-auto items-center justify-between rounded-lg bg-primary p-1 text-white w-full">
            <StepTitle
                title="Informations générales"
                isCurrent={pathname === "/reservation/exposant/infos"}
                index={1}
            />
            <StepTitle
                title="Choix du stand"
                isCurrent={pathname === "/reservation/exposant/stand"}
                index={2}
            />
            <StepTitle
                title="Confirmation"
                isCurrent={pathname === "/reservation/exposant/confirmation"}
                index={3}
            />
        </div>
    )
}