"use client";
import {Fragment, useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {Menu, ChevronDown} from "lucide-react";
import {Role} from "@/types/role";
import {usePathname} from "next/navigation";
import {CustomSession} from "@/types/session";
import {Session} from "next-auth";

export default function Navbar({session}: Readonly<{ session: Session | null }>) {
    const pathname = usePathname();
    const [state, setState] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

    if (pathname.includes("/admin")) {
        return null;
    }

    function getAccountLink(session: boolean, role: string | undefined) {
        const isAdminOrModerator = (role: string) => {
            const roleEnum = Role[role.toUpperCase() as keyof typeof Role];
            return roleEnum === Role.ADMIN || roleEnum === Role.MODERATOR;
        };

        if (session) {
            return {
                title: isAdminOrModerator(role!) ? "Admin" : "Mon compte",
                path: isAdminOrModerator(role!) ? "/admin" : "/account",
            };
        }
        return {
            title: "Se connecter",
            path: "/signIn",
        };
    }

    const {title: accountLinkTitle, path: accountLinkPath} = getAccountLink(!!session, (session as CustomSession)?.role);

    const menus = [
        {
            id: 1,
            title: "Le salon",
            links: [
                {id: 1, title: "En bref", path: "#"},
                {id: 2, title: "Contact", path: "#"},
            ],
        },
        {
            id: 2,
            title: "Exposer",
            links: [
                {id: 1, title: "Pré-réserver", path: "/register/exhibitor"},
                {id: 2, title: "Pourquoi exposer ?", path: "#"},
            ],
        },
        {
            id: 3,
            title: "Visiter",
            links: [
                {id: 1, title: "Demande d'invitation", path: "#"},
                {id: 2, title: "Liste des exposants", path: "#"},
                {id: 3, title: "Carte intéractive", path: "#"},
                {id: 4, title: "Infos pratiques", path: "#"},
            ],
        },
        {
            id: 4,
            title: "Conférences et animations",
            links: [
                {id: 1, title: "Programme", path: "#"},
                {id: 2, title: "Animations", path: "#"},
            ],
        },
        {
            id: 5,
            title: "Presse",
            links: [
                {id: 1, title: "Partenaires médias", path: "#"},
                {id: 2, title: "Accréditation presse", path: "#"},
                {id: 3, title: "Contact presse", path: "#"},
            ],
        },
        {
            id: 6,
            title: accountLinkTitle,
            path: accountLinkPath,
        },
    ];

    return (
        <header className="sticky top-0 z-50 h-[70px]">
            <nav className="bg-primary w-full border-b md:border-0">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h1 className="text-3xl font-bold text-secondary">Logo</h1>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu/>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            state ? "block" : "hidden"
                        }`}
                    >
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menus.map((item) => (
                                <li key={item.id} className="cursor-pointer text-secondary">
                                    {item.links ? (
                                        <DropdownMenu
                                            open={openDropdownId === item.id}
                                            onOpenChange={(isOpen) =>
                                                setOpenDropdownId(isOpen ? item.id : null)
                                            }
                                        >
                                            <DropdownMenuTrigger
                                                onMouseEnter={() => setOpenDropdownId(item.id)}
                                                asChild
                                            >
                                            <span className="flex items-center cursor-pointer">
                                                {item.title}
                                                <ChevronDown className="ml-1"/>
                                            </span>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                onMouseLeave={() => setOpenDropdownId(null)}
                                                align="start"
                                            >
                                                {item.links.map((link) => (
                                                    <Fragment key={link.id}>
                                                        <DropdownMenuItem className="focus:bg-primary focus:text-white">
                                                            <Link href={link.path}>{link.title}</Link>
                                                        </DropdownMenuItem>
                                                        {link.id !== item.links.length && (
                                                            <DropdownMenuSeparator/>
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link href={item.path}>{item.title}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}