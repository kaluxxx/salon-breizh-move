"use client";

export default function ErrorPage() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-gray-800">Erreur</h1>
            <h2 className="text-2xl font-bold text-gray-800">404</h2>
            <div className="w-16 h-1 bg-blue-500 rounded-full"/>
            <p className="text-gray-600 mt-2">La page que vous cherchez n'existe pas.</p>
        </div>
    );
}