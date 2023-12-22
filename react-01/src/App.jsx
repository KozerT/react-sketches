import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcept";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>CORE FEATURES</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <li>
              <button></button>
            </li>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
