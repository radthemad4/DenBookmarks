import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { feats, featCollections } from '../data/featslist';

export const FeatsDiv = () => {
  return <div>
    <h2>Feats</h2>
    <EntryList entries={feats} shouldSort={true} />
    <h3>Collections</h3>
    <EntryList entries={featCollections} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <FeatsDiv/>
  </div>,
  document.getElementById("root")
);