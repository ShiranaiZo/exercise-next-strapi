import { Button } from "@/components/ui/button";
import Image from "next/image";
// import styles from "./page.module.css";

async function getStrapiData(url: string) {
    const baseUrl = 'http://localhost:1337/api';

    try {
        const response = await fetch(`${baseUrl}${url}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching Strapi data:', error);
    }
}

export default async function Home() {
    const strapiData = await getStrapiData('/home-page');

    const {title, description} = strapiData.data;
    // console.log('Strapi Data:', strapiData);

    return (
        <main className="mx-auto py-6 min-h-screen antialiased">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4">{description}</p>
        </main>
    );
}
