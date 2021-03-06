import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { sourcebooks } from '../data/sourcebookslist';

export const SourcebooksDiv = () => {
  return <div>
    <h2>Sourcebooks</h2>
    <EntryList entries={sourcebooks} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <SourcebooksDiv/>
  </div>,
  document.getElementById("root")
);