import StarterSection from "./starterSection/StarterSection";
import SkillsSection from "./skillSection/SkillsSection";
import BestProjectSection from "./bestProjectSection/BestProjectSection";
import Separator from "./separator/Separator";

export default function HomePage () {
    return (
        <main className={"main-container"}>
            <StarterSection/>
            <BestProjectSection/>
            <Separator/>
            <SkillsSection/>
        </main>
    )
}