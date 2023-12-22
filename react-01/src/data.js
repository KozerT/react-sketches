import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Selenium",
    description:
      "Synchronize your code hassle-free, efficiently cache elements, and boost performance by minimizing unnecessary commands.",
  },
  {
    image: jsxImg,
    title: "Intuitive",
    description: "Set up and manage your drivers with intuitive API:s",
  },
  {
    image: propsImg,
    title: "Less code",
    description:
      "Implement the Page Object Model with less code and minimize maintenance costs.",
  },
  {
    image: stateImg,
    title: "Powerful",
    description: " Let Kolibrium inject drivers in your JUnit 5 tests.",
  },
];

export const EXAMPLES = {
  selenium: {
    title: "Selenium",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quas soluta at minus, adipisci animi rerum molestias facilis quaerat, doloribus, dicta itaque ullam voluptate labore. Incidunt delectus necessitatibus saepe assumenda!",
    code: `
function Welcome() {
  return <h1>Hello, Developer!</h1>;
}`,
  },
  intuitive: {
    title: "Intuitive",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quas soluta at minus, adipisci animi rerum molestias facilis quaerat, doloribus, dicta itaque ullam voluptate labore. Incidunt delectus necessitatibus saepe assumenda!",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to dive into Kolibrium !</p>
</div>`,
  },
  lessCode: {
    title: "Less code",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quas soluta at minus, adipisci animi rerum molestias facilis quaerat, doloribus, dicta itaque ullam voluptate labore. Incidunt delectus necessitatibus saepe assumenda!",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  powerful: {
    title: "Powerful",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quas soluta at minus, adipisci animi rerum molestias facilis quaerat, doloribus, dicta itaque ullam voluptate labore. Incidunt delectus necessitatibus saepe assumenda!",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
