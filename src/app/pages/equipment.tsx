import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { mediumBoGMagicItems, lesserBoGMagicItems, greaterBoGMagicItems, bogItemCollections, uncategorizedItems } from '../data/equipmentlist';

export const EquipmentDiv = () => {
  return <div>
    <h2>Equipment</h2>
    <h3>Book of Gears Style Magic Items</h3>
    <EntryList entries={bogItemCollections} shouldSort={false} />
    <h4>Minor/Lesser</h4>
    <EntryList entries={lesserBoGMagicItems} shouldSort={true} />
    <h4>Moderate/Medium</h4>
    <EntryList entries={mediumBoGMagicItems} shouldSort={true} />
    <h4>Major/Greater</h4>
    <EntryList entries={greaterBoGMagicItems} shouldSort={true} />
    <h3>Uncategorized</h3>
    <EntryList entries={uncategorizedItems} shouldSort={true}></EntryList>
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <EquipmentDiv/>
  </div>,
  document.getElementById("root")
);