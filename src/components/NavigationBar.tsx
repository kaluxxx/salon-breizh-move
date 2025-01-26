"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import type { Session } from "next-auth"
import Logo from "../app/_navigation/Logo"
import MobileMenu from "../app/_navigation/MobileMenu"
import DesktopMenu from "../app/_navigation/DesktopMenu"
import { Button } from "@/components/ui/button"
import { Role } from "@prisma/client"
import type { CustomSession } from "@/types/models/Session"
import { motion } from "framer-motion"

const menuItems = [
    {
        title: "Le salon",
        path: "/overview",
        submenu: [
            { title: "En bref", path: "/overview" },
            { title: "Contact", path: "/contact" },
            { title: "Infos pratiques", path: "/practical-infos" },
        ],
    },
    {
        title: "Exposer",
        path: "/exhibitv2",
    },
    {
        title: "Visiter",
        path: "/visit",
        submenu: [
            { title: "Demande d'invitation", path: "/visit" },
            { title: "Liste des exposants", path: "/exhibitors" },
            { title: "Plan interactif", path: "/interactive-map" },
        ],
    },
    {
        title: "Programme",
        path: "/program",
        submenu: [
            { title: "Conférences", path: "/program/conferences" },
            { title: "Ateliers", path: "/program/workshops" },
        ],
    },
    { title: "Presse", path: "/press" },
]

export default function Navbar({ session }: Readonly<{ session: Session | null }>) {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    if (pathname.includes("/admin")) {
        return null
    }

    function getAccountLink(session: boolean, role: string | undefined) {
        const isAdminOrModerator = (role: string) => {
            const roleEnum = Role[role.toUpperCase() as keyof typeof Role]
            return roleEnum === Role.ADMIN || roleEnum === Role.MODERATOR
        }

        if (session) {
            return {
                title: isAdminOrModerator(role!) ? "Admin" : "Mon compte",
                path: isAdminOrModerator(role!) ? "/admin" : "/account",
            }
        }
        return {
            title: "Se connecter",
            path: "/signIn",
        }
    }

    const { title: accountLinkTitle, path: accountLinkPath } = getAccountLink(!!session, (session as CustomSession)?.role)

    return (
        <motion.header
            className="sticky top-0 z-50 bg-white border-b shadow-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <nav className="container mx-auto h-16">
                <div className="flex h-full items-center justify-between px-4">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-6">
                        <DesktopMenu items={menuItems} />
                        <Button asChild variant="outline">
                            <a href={accountLinkPath}>{accountLinkTitle}</a>
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <MobileMenu
                            items={menuItems}
                            accountLink={{ title: accountLinkTitle, path: accountLinkPath }}
                            isOpen={mobileMenuOpen}
                            setIsOpen={setMobileMenuOpen}
                        />
                    </div>
                </div>
            </nav>
        </motion.header>
    )
}

