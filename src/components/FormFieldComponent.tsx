import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

interface FormFieldComponentProps {
    control: any;
    name: string;
    label: string;
    placeholder: string;
    type?: "input" | "textarea";
    required?: boolean;
}

export function FormFieldComponent({control, name, label, placeholder, type = "input", required}: FormFieldComponentProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({field}) => (
                <FormItem>
                    <FormLabel required={required}>{label}</FormLabel>
                    <FormControl>
                        {type === "input" ? (
                            <Input placeholder={placeholder} {...field} />
                        ) : (
                            <Textarea placeholder={placeholder} {...field} />
                        )}
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    );
}