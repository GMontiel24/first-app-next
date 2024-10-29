import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Precios de Montiel S.A',
    description: 'Precios de los muebles de la empresa Montiel S.A',
    keywords: ["precios", "montiel", "empresa", "muebles", "precios montiel", "precios empresa", "precios montiel s.a", "precios empresa montiel", "precios montiel s.a muebles", "precios empresa montiel muebles"],
};

export default function PricingPage() {
    return (
        <div>
            <h1 className="text-5xl">Pricing</h1>
            <p>Get started with our free plan</p>
        </div>
    )
}   