import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrestigeClassEntryList } from '../entry';
import { prestigeClasses } from '../data/prestigeclasseslist';

export const PrestigeClassesDiv = () => {
  return <div>
    <h2>Prestige Classes</h2>
    <PrestigeClassEntryList entries={prestigeClasses} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <PrestigeClassesDiv/>
  </div>,
  document.getElementById("root")
);