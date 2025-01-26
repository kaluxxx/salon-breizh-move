import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";

export default function MenuItem({ item, openDropdownId, setOpenDropdownId }: any) {
    return (
        <li
            key={item.id}
            className="relative group cursor-pointer"
        >
            {item.links ? (
                <DropdownMenu
                    open={openDropdownId === item.id}
                    onOpenChange={(isOpen) => setOpenDropdownId(isOpen ? item.id : null)}
                >
                    <DropdownMenuTrigger
                        onMouseEnter={() => setOpenDropdownId(item.id)}
                        asChild
                    >
            <span className="flex items-center cursor-pointer relative">
              {item.title}
                <ChevronDown className="ml-1" />
                <span className="absolute bottom-[-4px] left-0 h-[3px] bg-primary transition-all w-full"></span>
            </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent onMouseLeave={() => setOpenDropdownId(null)} align="start">
                        {item.links.map((link: any) => (
                            <Fragment key={link.id}>
                                <DropdownMenuItem className="focus:bg-primary focus:text-white">
                                    <Link href={link.path}>{link.title}</Link>
                                </DropdownMenuItem>
                                {link.id !== item.links.length && <DropdownMenuSeparator />}
                            </Fragment>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link href={item.path} className="relative">
                    {item.title}
                    <span className="absolute bottom-[-8px] left-0 h-[3px] bg-primary transition-all w-full"></span>
                </Link>
            )}
        </li>
    );
}
