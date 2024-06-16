import StarterSection from "./starterSection/StarterSection";
import SkillsSection from "./skillSection/SkillsSection";
import BestPetProjectSection from "./bestPetProjectSection/BestPetProjectSection";
import Separator from "./separator/Separator";
import BestFreelanceProjectSection from "./bestFreelanceProjectSection/BestFreelanceProjectSection";

export default function HomePage ({language}) {
    return (
        <main className={"main-container"}>
            <StarterSection language={language}/>
            <BestPetProjectSection language={language}/>
            <Separator/>
            <BestFreelanceProjectSection language={language}/>
            <Separator/>
            <SkillsSection language={language}/>
        </main>
    )
}