import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ item }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <h4 onClick={() => setCollapse(!collapse)} className="faq faq-q">
        Q. {item.q}
        <span className="collapse-arrow">{collapse ? "▲" : "▼"}</span>
      </h4>
      <p className={`faq ${collapse ? "d-block" : "d-none"}`}>
        <span className="fw-semibold">Ans.</span> {item.a}
      </p>
    </div>
  );
};

export default AccordionItem;
