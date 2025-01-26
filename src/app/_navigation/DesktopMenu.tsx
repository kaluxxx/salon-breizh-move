"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface MenuItem {
    title: string
    path: string
    submenu?: { title: string; path: string }[]
}

interface DesktopMenuProps {
    items: MenuItem[]
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
    const pathname = usePathname()
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const active = items.find((item) => pathname.startsWith(item.path))
        setActiveItem(active ? active.title : null)
    }, [pathname, items])

    const handleMouseEnter = (title: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setHoveredItem(title)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredItem(null)
        }, 300) // Délai de 300ms avant de fermer le sous-menu
    }

    return (
        <nav className="relative" onMouseLeave={handleMouseLeave}>
            <ul className="flex space-x-6">
                {items.map((item, index) => (
                    <li key={index} className="relative" onMouseEnter={() => handleMouseEnter(item.title)}>
                        <Link
                            href={item.path}
                            className={`flex items-center text-sm font-medium transition-colors hover:text-primary focus-visible:text-primary ${
                                activeItem === item.title ? "text-primary" : "text-foreground"
                            }`}
                        >
                            {item.title}
                        </Link>
                        <motion.div
                            className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-primary"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredItem === item.title || activeItem === item.title ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                        />
                        <AnimatePresence>
                            {item.submenu && hoveredItem === item.title && (
                                <motion.div
                                    key={index}
                                    className="absolute left-0 mt-2 bg-background shadow-lg rounded-b-md overflow-hidden"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    onMouseEnter={() => handleMouseEnter(item.title)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <ul className="flex flex-col bg-white">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <motion.li
                                                key={subIndex}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                            >
                                                <Link
                                                    href={subItem.path}
                                                    className="block px-3 py-2 text-sm text-foreground hover:text-primary focus:text-primary transition-colors hover:bg-muted whitespace-nowrap"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

