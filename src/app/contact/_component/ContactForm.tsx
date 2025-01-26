"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { type ContactFormValues, ContactSchema } from "@/types/schema/contactSchema"
import { createContact } from "@/app/action/contactActions"
import { HTTPStatus } from "@/types/enums/HTTPStatus"
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormFieldComponent } from "@/components/FormFieldComponent"
import { FormButton } from "@/components/FormButton"
import { useFormHandler } from "@/hooks/useFormHandler"
import type { Contact } from "@prisma/client"
import { motion } from "framer-motion"
import {useInView} from "react-intersection-observer";

export default function ContactForm() {
  const router = useRouter()
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      companyName: "",
      companyFunction: "",
      phone: "",
    },
  })

  const { loading, success, handleSubmit } = useFormHandler<ContactFormValues, Contact>({
    onSubmit: async (values) => {
      const result = await createContact(values)
      if (result.status !== HTTPStatus.CREATED || !result.data) {
        throw new Error(result.message)
      }
      return result
    },
    onSuccess: () => router.push("/"),
  })

  return (
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <FormFieldComponent
                control={form.control}
                name="firstName"
                label="Prénom"
                placeholder="Votre prénom"
                required
            />
            <FormFieldComponent control={form.control} name="lastName" label="Nom" placeholder="Votre nom" required />
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <FormFieldComponent control={form.control} name="email" label="Email" placeholder="Votre email" required />
            <FormFieldComponent control={form.control} name="phone" label="Téléphone" placeholder="Votre téléphone" />
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <FormFieldComponent
                control={form.control}
                name="companyName"
                label="Nom de l'entreprise"
                placeholder="Nom de l'entreprise"
            />
            <FormFieldComponent
                control={form.control}
                name="companyFunction"
                label="Fonction"
                placeholder="Votre fonction"
            />
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FormFieldComponent
                control={form.control}
                name="message"
                label="Message"
                placeholder="Votre message"
                type="textarea"
                required
            />
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FormButton loading={loading} success={success} text="Envoyer" />
          </motion.div>
        </form>
      </Form>
  )
}

