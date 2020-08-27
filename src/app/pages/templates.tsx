import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EntryList } from '../entry';
import { templates } from '../data/templateslist';

export const TemplatesDiv = () => {
  return <div>
    <h2>Templates</h2>
    <EntryList entries={templates} shouldSort={true} />
  </div>
}

ReactDOM.render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <TemplatesDiv/>
  </div>,
  document.getElementById("root")
);