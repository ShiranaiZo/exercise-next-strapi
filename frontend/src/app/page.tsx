import qs from "qs";
import { HeroSection } from "@/components/custom/HeroSection";
import { getHomePage } from "@/data/loader";

export default async function Home() {
    const strapiData = await getHomePage();
    
    const { title, description, blocks } = strapiData.data;
    return (
        <main>
        <HeroSection data={blocks[0]} />
        </main>
    );
}