import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { scalingFeats } from '../data/scalingfeatslist';

export const ScalingFeatsDiv = () => {
  return <div>
    <h2>Scaling Feats</h2>
    <EntryList entries={scalingFeats} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <div>
      <ScalingFeatsDiv/>
    </div>
  </div>,
  document.getElementById("root")
);