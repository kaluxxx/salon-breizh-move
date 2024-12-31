import {useState} from "react";
import {useToast} from "@/hooks/useToast";
import {ToastAction} from "@/components/ui/toast";
import {Response} from "@/types/payloads/Response";

interface UseFormHandlerProps<T, R> {
    onSubmit: (values: T) => Promise<Response<R>>;
    onSuccess?: () => void;
    onError?: (error: string, values: T) => void;
}

export function useFormHandler<T, R>({onSubmit, onSuccess, onError}: UseFormHandlerProps<T, R>) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const {toast} = useToast();

    async function handleSubmit(values: T) {
        setLoading(true);
        setSuccess(null);

        try {
            const result = await onSubmit(values);
            handleSuccess(result.message);
        } catch (error: any) {
            handleError(error.message, values);
        } finally {
            setLoading(false);
        }
    }

    function handleError(error: string, values: T) {
        setSuccess(false);
        toast({
            title: "Erreur",
            description: error,
            action: (
                <ToastAction altText="Try again" onClick={() => handleSubmit(values)}>Réessayer</ToastAction>
            ),
        });
        onError && onError(error, values);
    }

    function handleSuccess(message: string) {
        setSuccess(true);
        toast({
            title: "Succès",
            description: message,
        });
        onSuccess && onSuccess();
    }

    return {loading, success, handleSubmit};
}