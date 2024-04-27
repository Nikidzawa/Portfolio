import StarterSection from "./starterSection/StarterSection";
import SkillsSection from "./skillSection/SkillsSection";
import CaseSection from "./caseSection/CaseSection";
import BestProjectSection from "./bestProjectSection/BestProjectSection";
import Separator from "./separator/Separator";

export default function HomePage () {
    return (
        <main className={"main-container"}>
            <StarterSection/>
            <CaseSection/>
            <Separator/>
            <BestProjectSection/>
            <Separator/>
            <SkillsSection/>
        </main>
    )
}