import StarterSection from "./starterSection/StarterSection";
import SkillsSection from "./skillSection/SkillsSection";

export default function HomePage () {
    return (
        <main className={"main-container"}>
            <StarterSection/>
            <SkillsSection/>
        </main>
    )
}