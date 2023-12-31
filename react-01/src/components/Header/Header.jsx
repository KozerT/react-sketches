import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];
function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const description = reactDescription[generateRandomInt(2)];

  return (
    <header>
      <h1>Kolibrium</h1>
      <p>{description} Kolibrium concepts.</p>
    </header>
  );
};

export default Header;
