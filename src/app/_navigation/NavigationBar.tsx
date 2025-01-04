"use client";

import {useState} from "react";
import {usePathname} from "next/navigation";
import {Session} from "next-auth";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import {Role} from "@prisma/client";
import {CustomSession} from "@/types/models/Session";

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

    const {
        title: accountLinkTitle,
        path: accountLinkPath
    } = getAccountLink(!!session, (session as CustomSession)?.role);

    const menus = [
        {
            id: 1,
            title: "Le salon",
            links: [
                {id: 1, title: "En bref", path: "/overview"},
                {id: 2, title: "Contact", path: "/contact"},
                {id: 3, title: "Infos pratiques", path: "/practical-infos"},
            ],
        },
        {
            id: 2,
            title: "Exposer",
            path: "/reservation",
        },
        {
            id: 3,
            title: "Visiter",
            links: [
                {id: 1, title: "Demande d'invitation", path: "#"},
                {id: 2, title: "Liste des exposants", path: "#"},
                {id: 3, title: "Carte intéractive", path: "#"},
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
        <header className="sticky top-0 z-50 h-[70px] bg-white border-b md:border-0">
            <nav className="container mx-auto w-full h-full items-center md:flex md:px-8">
                <div className="h-full flex items-center justify-between md:block px-4">
                    <Logo/>
                    <div className="md:hidden">
                        <MenuButton onClick={() => setState(!state)}/>
                    </div>
                </div>
                <div className={`bg-white flex-1 pb-3 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}>
                    <ul className="justify-end items-center p-4 space-y-8 md:flex md:space-x-10 md:space-y-0">
                        {menus.map((item) => (
                            <MenuItem key={item.id} item={item} openDropdownId={openDropdownId} setOpenDropdownId={setOpenDropdownId}/>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}