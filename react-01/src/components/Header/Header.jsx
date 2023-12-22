import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];
function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const description = reactDescription[generateRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Kolibrium Essentials</h1>
      <p>{description} Kolibrium concepts.</p>
    </header>
  );
};

export default Header;
