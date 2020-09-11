import ReactDOM from "react-dom";
import React from "react";
import { koumeiMonsterPrcsBBCode } from "../data/koumeimonsterprcslist";

ReactDOM.render(
    <div style={{ padding: "1em" }}>
      <pre>{koumeiMonsterPrcsBBCode()}</pre>
    </div>,
    document.getElementById("root")
  );