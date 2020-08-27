import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { npcClasses } from '../data/npcclasseslist';

export const NPCClasssesDiv = () => {
  return <div>
    <h2>NPC Classes</h2>
    <EntryList entries={npcClasses} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <NPCClasssesDiv/>
  </div>,
  document.getElementById("root")
);