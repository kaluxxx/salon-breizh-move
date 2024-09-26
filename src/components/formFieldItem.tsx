import {FormField, FormItem, FormLabel, FormMessage, FormControl} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {cloneElement, ReactElement} from "react";
import {ControllerRenderProps, FieldValues} from "react-hook-form";

interface RenderComponentProps {
    component?: ReactElement | (() => ReactElement) | null;
    type?: string;
    field?: ControllerRenderProps<FieldValues, string>;
}

function renderComponent({component, field}: RenderComponentProps) {
    if (typeof component === "function") {
        return component();
    }

    return component ? (
        cloneElement(component, {
            onValueChange: field?.onChange,
            defaultValue: field?.value,
            ...field
        })
    ) : (
        <Input
            onChange={field?.onChange}
            value={field?.value}
            {...field}
        />
    );
}


interface FormFieldItemProps {
    name?: string;
    label?: string;
    required?: boolean;
    type?: string;
    component?: ReactElement | (() => ReactElement) | null;
    control?: any;
}

export function FormFieldItem({
                                  name,
                                  label,
                                  required = false,
                                  type = "text",
                                  component,
                                  control
                              }: Readonly<FormFieldItemProps>) {

    function formItem(field?: ControllerRenderProps<FieldValues, string>) {
        return (
            <FormItem>
                {label &&
                    <FormLabel className="text-md text-gray-700 font-bold" required={required}>
                        {label}
                    </FormLabel>
                }
                <FormMessage/>
                <FormControl>
                    {renderComponent({component, type, field})}
                </FormControl>
            </FormItem>
        );
    }

    return control && name ? (
        <FormField
            name={name}
            control={control}
            render={({field}) => formItem(field)}
        />
    ) : (
        formItem()
    );
}
