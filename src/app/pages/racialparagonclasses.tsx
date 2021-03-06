import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { racialParagons } from '../data/racialparagonslist';

export const RacialParagonsDiv = () => {
  return <div>
    <h2>Racial Paragons</h2>
    <EntryList entries={racialParagons} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <RacialParagonsDiv/>
  </div>,
  document.getElementById("root")
);