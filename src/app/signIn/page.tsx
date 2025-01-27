"use client";

import LoginForm from "@/app/signIn/_component/form"
import AnimatedBackground from "@/app/signIn/_component/AnimatedBackground"
import { motion } from "framer-motion"

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-primary to-secondary overflow-hidden relative">
            <AnimatedBackground />
            <div className="absolute z-10 inset-0 flex items-center justify-center p-4">
                <motion.div
                    className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 max-w-md w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="text-4xl font-bold text-primary mb-6 text-center"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Bienvenue sur EUROMOVE
                    </motion.h1>
                    <motion.p
                        className="text-muted-foreground mb-8 text-center"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Connectez-vous pour accéder à votre espace personnel
                    </motion.p>
                    <LoginForm />
                </motion.div>
            </div>
        </main>
    )
}

