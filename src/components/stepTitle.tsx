import {cn} from "@/lib/utils";

interface StepTitleProps {
    title: string;
    isCurrent?: boolean;
    index?: number;
}

export default function StepTitle({title, isCurrent, index}: Readonly<StepTitleProps>) {
    return (
        <div
            className={cn("flex-1 w-full flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background", {
                "bg-white text-black shadow": isCurrent,
            })}>
            <span className="h-5 w-5 flex items-center justify-center rounded-full bg-primary text-white mr-2">
                {isCurrent && index}
            </span>
            <span>{title}</span>
        </div>
    );
}