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
                isCurrent={pathname === "/register/exhibitor/step_one"}
                index={1}
            />
            <StepTitle
                title="Choix du stand"
                isCurrent={pathname === "/register/exhibitor/step_two"}
                index={2}
            />
            <StepTitle
                title="Confirmation"
                isCurrent={pathname === "/register/exhibitor/confirmation"}
                index={3}
            />
        </div>
    )
}