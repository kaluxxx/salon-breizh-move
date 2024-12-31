import {Button} from "@/components/ui/button";
import {Check, Loader, Mail} from "lucide-react";

interface FormButtonProps {
    loading: boolean;
    success: boolean | null;
    text: string;
}

export function FormButton({loading, success, text}: FormButtonProps) {
    function getIcon() {
        if (loading) {
            return <Loader className="animate-spin"/>;
        }
        return success === true ? <Check/> : <Mail/>;
    }

    return (
        <Button>
            {getIcon()}
            <span>{text}</span>
        </Button>
    );
}