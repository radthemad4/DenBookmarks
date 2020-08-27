import { EntryList } from "../entry";
import { baseClasses } from "../data/baseclasseslist";
import ReactDOM from "react-dom";
import React from "react";

export const BaseClassesDiv = () => {
  return <div>
    <h2>Base Classes</h2>
    <EntryList entries={baseClasses} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <BaseClassesDiv/>
  </div>,
  document.getElementById("root")
);