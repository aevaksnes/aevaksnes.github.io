import { ProjectWrapper } from "@/components/ProjectWrapper";
import { ProjectUpdates } from "@/components/ProjectUpdates";

export default function Braindump() {
  return (
    <ProjectWrapper title="Braindump" tags={["Flutter", "PWA"]}>
      
      <section className="prose dark:prose-invert">
        <p>Her skriver du fritt i vanlig HTML/React...</p>
        <img src="/special-diagram.png" alt="Arkitektur" />
        <p>Mer tekst her...</p>
      </section>

      {/* Gets updates for 'braindump' */}
      <ProjectUpdates projectId="braindump" />
      
    </ProjectWrapper>
  );
}