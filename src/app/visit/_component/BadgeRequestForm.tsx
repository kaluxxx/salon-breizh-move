"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

export default function BadgeRequestForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

    const onSubmit = async () => {
        setIsSubmitting(true)
        // Simuler un appel API
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        setSubmitResult({
            success: true,
            message: "Votre demande de badge a été enregistrée avec succès. Vous recevrez bientôt un email de confirmation.",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Ce champ est requis" })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email professionnel
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email", {
                        required: "Ce champ est requis",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide",
                        },
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>}
            </div>
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Entreprise
                </label>
                <input
                    type="text"
                    id="company"
                    {...register("company", { required: "Ce champ est requis" })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message as string}</p>}
            </div>
            <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                    Fonction
                </label>
                <input
                    type="text"
                    id="jobTitle"
                    {...register("jobTitle", { required: "Ce champ est requis" })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                {errors.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message as string}</p>}
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 disabled:opacity-50"
            >
                {isSubmitting ? "Envoi en cours..." : "Demander mon badge"}
            </button>
            {submitResult && (
                <div
                    className={`mt-4 p-4 rounded-md ${submitResult.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                    {submitResult.message}
                </div>
            )}
        </form>
    )
}

