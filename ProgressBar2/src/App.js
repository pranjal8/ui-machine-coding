import React from "react";

function App() {
  return (
    <div>
      <p>
        {" "}
        Build an app where clicking the "Add" button adds progress bars to the
        page. The progress bars fill up gradually as soon as they are shown.
      </p>
      <p>Requirements</p>

      <ul>
        <li>Clicking on the "Add" button adds a progress bar to the page.</li>
        <li>
          {" "}
          Each progress bar start filling up smoothly as soon as they're added
        </li>
        <li> Each bar takes approximately 2000ms to completely fill up.</li>
      </ul>
    </div>
  );
}

export default App;
