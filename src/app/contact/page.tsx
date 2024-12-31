import {UserRoundPen} from "lucide-react";
import ContactForm from "@/app/contact/_component/form";
import Image from "next/image";

export default function Page() {
  return (
      <section
          className="min-h-[calc(100vh-70px)] flex max-lg:flex-col items-center justify-between">
          <div
              className="relative flex h-full w-full md:w-1/2 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-10">
              <Image
                  src="/images/camion.jpg"
                  alt="Hero"
                  width={1920}
                  height={1080}
                  className="z-20 object-cover w-full h-[calc(100vh-70px)]"
              />
          </div>
          <div
              className="w-full md:w-1/2 text-xl text-gray-700 px-12 py-8">
              <h1 className="text-6xl text-center text-primary font-bold">Contact</h1>
              <p className="text-xl text-center mt-4">
                  Une question, une demande particulière ?
              </p>
              <p className="text-xl text-center">
                  N'hésitez pas à nous contacter !
              </p>
              <p className="text-xl text-center">
                  Nous vous répondrons dans les plus brefs délais.
              </p>
              <ContactForm/>
          </div>
      </section>
  )
}