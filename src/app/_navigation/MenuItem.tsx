"use client"

import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface MenuItemProps {
    item: {
        id: number
        title: string
        path?: string
        links?: Array<{
            id: number
            title: string
            path: string
        }>
    }
    openDropdownId: number | null
    setOpenDropdownId: (id: number | null) => void
}

export default function MenuItem({ item, openDropdownId, setOpenDropdownId }: MenuItemProps) {
    if (item.links) {
        return (
            <li className="relative">
                <DropdownMenu
                    open={openDropdownId === item.id}
                    onOpenChange={(open) => setOpenDropdownId(open ? item.id : null)}
                >
                    <DropdownMenuTrigger
                        className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                        onMouseEnter={() => setOpenDropdownId(item.id)}
                    >
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        onMouseLeave={() => setOpenDropdownId(null)}
                        className="w-56 bg-background/95 backdrop-blur-sm"
                    >
                        {item.links.map((link) => (
                            <DropdownMenuItem key={link.id} asChild>
                                <Link
                                    href={link.path}
                                    className="flex w-full cursor-pointer items-center px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                    {link.title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
        )
    }

    return (
        <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link
                href={item.path || "#"}
                className="text-sm font-medium transition-colors hover:text-primary focus-visible:text-primary"
            >
                {item.title}
            </Link>
        </motion.li>
    )
}

