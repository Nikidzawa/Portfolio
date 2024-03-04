import SkillsSection from "./skillSection/SkillsSection";
import StarterSection from "./starterSection/StarterSection";

export default function MainPage () {
    return (
        <main className={"main-container"}>
            <StarterSection/>
            <SkillsSection/>
        </main>
    )
}