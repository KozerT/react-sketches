import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main className="content">
        <CoreConcepts />
        <Examples />
      </main>
      <Footer />
    </>
  );
}

export default App;
