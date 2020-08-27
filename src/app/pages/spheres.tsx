import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { spheres } from '../data/spherelist';

export const SpheresDiv = () => {
  return <div>
    <h2>Spheres</h2>
    <EntryList entries={spheres} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <SpheresDiv/>
  </div>,
  document.getElementById("root")
);