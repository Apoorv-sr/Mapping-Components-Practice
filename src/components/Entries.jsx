import React from "react";
import emojipedia from "../emojipedia.js";

function CreateEntry(temp) {
  return (
    <div className="term" key={temp.id}>
      <dt>
        <span className="emoji" role="img" aria-label={temp.name}>
          {temp.emoji}
        </span>
        <span>{temp.name}</span>
      </dt>
      <dd>{temp.meaning}</dd>
    </div>
  );
}

function Entry() {
  return emojipedia.map(CreateEntry);
}

export default Entry;
