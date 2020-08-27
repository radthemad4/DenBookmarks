import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { races } from '../data/raceslist';

export const RacesDiv = () => {
  return <div>
    <h2>Races</h2>
    <EntryList entries={races} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <RacesDiv/>
  </div>,
  document.getElementById("root")
);