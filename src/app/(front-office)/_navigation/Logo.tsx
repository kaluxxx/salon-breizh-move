import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Logo() {
    return (
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center p-2">
                <Image src="/images/logo.png" alt="Logo EUROMOVE" width={240} height={80} className="h-16 w-auto" priority />
            </Link>
        </motion.div>
    )
}

