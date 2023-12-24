import React from "react";
import parse from "html-react-parser";
import "./tracker.css";

const classes = {
  removed: "removed",
  added: "added",
};

const BodyTracker = (props) => {
  let trackerChanges = props.changes;
  while (trackerChanges.includes("<p>"))
    trackerChanges = trackerChanges.replace("<p>", ``);
  while (trackerChanges.includes("<p>"))
    trackerChanges = trackerChanges.replace("</p>", ``);
  while (trackerChanges.includes("<++"))
    trackerChanges = trackerChanges.replace(
      "<++",
      `<span className=${classes.added}>`
    );
  while (trackerChanges.includes("<--"))
    trackerChanges = trackerChanges.replace(
      "<--",
      `<span className=${classes.removed}>`
    );
  while (trackerChanges.includes("-->"))
    trackerChanges = trackerChanges.replace("-->", `</span>`);
  while (trackerChanges.includes("++>"))
    trackerChanges = trackerChanges.replace("++>", `</span>`);
  trackerChanges = parse(trackerChanges);

  return <div id="tracker-div">{trackerChanges}</div>;
};

export default BodyTracker;
