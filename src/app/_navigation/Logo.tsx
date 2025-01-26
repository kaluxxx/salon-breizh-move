import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Logo() {
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center">
                <Image src="/images/logo.png" alt="Logo EUROMOVE" width={120} height={40} className="h-8 w-auto" priority />
            </Link>
        </motion.div>
    )
}

