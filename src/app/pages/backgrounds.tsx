import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { backgrounds } from '../data/backgroundslist';

export const BackgroundsDiv = () => {
  return <div>
    <h2>Backgrounds</h2>
    <EntryList entries={backgrounds} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <BackgroundsDiv/>
  </div>,
  document.getElementById("root")
);