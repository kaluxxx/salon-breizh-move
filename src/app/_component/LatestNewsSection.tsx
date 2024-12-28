export default function LatestNewsSection() {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center">Actualités</h2>
            <p className="text-center">Les dernières actualités du salon</p>
            <div className="flex max-md:flex-col gap-4 mt-8">
                <div className="flex flex-col w-full md:w-1/3">
                    <div className="flex flex-col gap-4">
                        <div className="h-52 bg-gray-200 rounded-lg"/>
                        <div className="h-52 bg-gray-200 rounded-lg"/>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-2/3 gap-4">
                    <div className="h-96 bg-gray-200 rounded-lg"/>
                    <div className="h-96 bg-gray-200 rounded-lg"/>
                </div>
            </div>
        </section>
    )
}