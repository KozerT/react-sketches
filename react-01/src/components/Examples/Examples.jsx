import { CORE_CONCEPTS } from "../../data";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import "./Examples.css";
import TabButton from "../Buttons/TabButton";
import Section from "../Section.jsx/Section";
import Tabs from "../Tabs/Tabs";

const Examples = () => {
  const [selectedContent, setSelectedContent] = useState("");

  const handleOnClick = (selectedButton) => {
    setSelectedContent(selectedButton);
  };

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedContent === "selenium"}
              onClick={() => handleOnClick(`selenium`)}
            >
              {CORE_CONCEPTS[0].title}
            </TabButton>
            <TabButton
              isSelected={selectedContent === "intuitive"}
              onClick={() => handleOnClick(`intuitive`)}
            >
              {CORE_CONCEPTS[1].title}
            </TabButton>
            <TabButton
              isSelected={selectedContent === "lessCode"}
              onClick={() => handleOnClick(`lessCode`)}
            >
              {CORE_CONCEPTS[2].title}
            </TabButton>
            <TabButton
              isSelected={selectedContent === "powerful"}
              onClick={() => handleOnClick(`powerful`)}
            >
              {CORE_CONCEPTS[3].title}
            </TabButton>
          </>
        }
      >
        {!selectedContent && <p>Please select topic.</p>}
        {selectedContent && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedContent].title}</h3>
            <p>{EXAMPLES[selectedContent].description}</p>
            <pre>
              <code>{EXAMPLES[selectedContent].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
};

export default Examples;
