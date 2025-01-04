import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import {buttonVariants} from "@/components/ui/button";

type LinkBtnProps = LinkProps &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    children: ReactNode;
    className?: string;
};

export default function LinkButton({
                                    className,
                                    variant,
                                    children,
                                    size,
                                    ...props
                                }: LinkBtnProps) {
    return (
        <Link
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </Link>
    );
}
