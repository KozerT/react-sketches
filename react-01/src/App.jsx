import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
