import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'About from Montiel S.A',
    description: 'About description',
};

export default function AboutPage() {
    return (
        <div>
            <h1 className="text-5xl">About</h1>
            <p>About</p>
        </div>
    )
}   