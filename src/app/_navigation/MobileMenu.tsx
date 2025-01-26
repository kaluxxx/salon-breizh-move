"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface MenuItem {
    title: string
    path: string
    submenu?: { title: string; path: string }[]
}

interface MobileMenuProps {
    items: MenuItem[]
    accountLink: { title: string; path: string }
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ items, accountLink, isOpen, setIsOpen }: MobileMenuProps) {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    const toggleSubmenu = (title: string) => {
        setOpenSubmenu(openSubmenu === title ? null : title)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {items.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.1 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={item.path}
                                                className="block py-2 text-lg font-medium transition-colors hover:text-primary focus-visible:text-primary"
                                                onClick={() => !item.submenu && setIsOpen(false)}
                                            >
                                                {item.title}
                                            </Link>
                                            {item.submenu && (
                                                <Button variant="ghost" size="sm" onClick={() => toggleSubmenu(item.title)}>
                                                    {openSubmenu === item.title ? (
                                                        <ChevronUp className="h-4 w-4" />
                                                    ) : (
                                                        <ChevronDown className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            )}
                                        </div>
                                        {item.submenu && (
                                            <AnimatePresence>
                                                {openSubmenu === item.title && (
                                                    <motion.ul
                                                        className="mt-2 ml-4 space-y-2"
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <motion.li
                                                                key={subIndex}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                                            >
                                                                <Link
                                                                    href={subItem.path}
                                                                    className="block py-1 text-sm transition-colors hover:text-primary focus-visible:text-primary"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    {subItem.title}
                                                                </Link>
                                                            </motion.li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: items.length * 0.1 }}
                                >
                                    <Button asChild className="w-full mt-4" onClick={() => setIsOpen(false)}>
                                        <Link href={accountLink.path}>{accountLink.title}</Link>
                                    </Button>
                                </motion.li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

