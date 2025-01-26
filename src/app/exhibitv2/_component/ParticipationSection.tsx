import ParticipationForm from "@/app/exhibit/_component/ParticipationForm"

export default function ParticipationSection() {
  return (
    <section className="py-20 bg-secondary text-white" id="pre-register">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Participez à EUROMOVE</h2>
            <p className="text-lg mb-4">
              Profitez de nos formules attractives dès <span className="font-bold">1 928€</span> pour un stand de{" "}
              <span className="font-bold">18m²</span>.
            </p>
            <div className="bg-white/20 p-4 rounded-lg text-center mb-6">
              <p className="text-xl font-semibold">Exposez sur 18m² pour seulement 1 928€</p>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Un emplacement adapté à vos besoins
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Services inclus (électricité, mobilier de base)
              </li>
            </ul>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Réservez votre stand</h3>
            <ParticipationForm />
          </div>
        </div>
      </div>
    </section>
  )
}

