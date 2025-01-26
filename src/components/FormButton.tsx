import {Button} from "@/components/ui/button";
import {Check, Loader, Mail} from "lucide-react";

interface FormButtonProps {
    loading: boolean;
    success: boolean | null;
    text: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

export function FormButton({loading, success, text, variant}: FormButtonProps) {
    function getIcon() {
        if (loading) {
            return <Loader className="animate-spin"/>;
        }
        return success === true ? <Check/> : <Mail/>;
    }

    return (
        <Button variant={variant}>
            {getIcon()}
            <span>{text}</span>
        </Button>
    );
}