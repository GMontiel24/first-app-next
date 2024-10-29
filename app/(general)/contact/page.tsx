import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contacto de empresa Montiel S.A',
    description: 'Telefonos y correos de contacto de la empresa Montiel S.A',
    keywords: ["contacto", "montiel", "empresa", "telefonos", "correos", "contacto montiel", "contacto empresa", "contacto montiel s.a", "contacto empresa montiel", "contacto montiel s.a telefonos", "contacto montiel s.a correos", "contacto empresa montiel telefonos", "contacto empresa montiel correos"],
};


export default function ContactPage() {

    return (
        <div>
            <h1 className="text-5xl">Contact</h1>
            <p>Send me an email at </p>
        </div>
    )
}