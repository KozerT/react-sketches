import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import "./CoreConcepts.css";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>CORE FEATURES</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConceptItem, title) => (
          <CoreConcept key={title} {...coreConceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
