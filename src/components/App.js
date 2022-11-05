import React, { useState} from "react";
import '../styles/App.css';

function App{
let relatives = ["bhanu", "prashansha", "rashi"];
        return(
            <div id="main">

      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
            </div>
        )
    }

export default App;
