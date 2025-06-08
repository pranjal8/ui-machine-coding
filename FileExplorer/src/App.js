import React from "react";
import FileExplorer from "./components/FileExplorer";
import { data } from "./utils/Data";

const App = () => {
  return (
    <div>
      <p>
        Given an array of file objects, build a component that displays them in
        a hierarchical tree format. There are two types of objects – files and
        directories:
        <li>
          {" "}
          Files are essentially leaf nodes of the tree, they do not have
          children.{" "}
        </li>
        <li>
          {" "}
          Directories can contain other objects – either files or directories.{" "}
        </li>
        <p>
          You may assume that the IDs and names within the same directory are
          unique.
        </p>
      </p>
      <p>
        {" "}
        <strong>Requirements</strong>
        <p>The names of the directories/files should be displayed.</p>
        <ol>
          <li>
            Directories
            <ul>
              <li>
                Contents of the directory should be displayed in a manner that
                indicates it belongs within the directory. The recommended
                approach is to indent the contents to the right.
              </li>
              <li>
                Directories can be expanded and collapsed. Clicking on a
                directory should toggle its expanded/collapsed state.
              </li>
              <li>
                Directories should appear before files. All the items should be
                sorted alphabetically within their respective categories.
              </li>
              <li>
                You may style the expand/collapse functionality in a way you
                prefer as long as it is clear that the item is a directory and
                whether it is in the expanded or collapsed state.
              </li>
              <li>Directories can be empty.</li>
            </ul>
          </li>
          <li>
            Files
            <ul>
              {" "}
              <li>
                {" "}
                Files are not expandable and cannot be interacted with.
              </li>{" "}
            </ul>
          </li>
        </ol>
      </p>

     
     <div> 

       <FileExplorer data={data} /> 
     </div>
    </div>
  );
};

export default App;
