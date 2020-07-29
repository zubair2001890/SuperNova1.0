import BaseNav from "../../../components/EditLayout/Nav";
import React from "react";
import paths from "../../../constants/paths";

export default function Nav() {
  return (
    <BaseNav
      links={[
        {
          to: paths.projectOverview,
          children: "Overview",
        },
        {
          to: paths.projectScientists,
          children: "Scientists",
        },
        {
          to: paths.projectTimeline,
          children: "Timeline & Budget",
        },
        {
          to: paths.projectMethods,
          children: "Methods",
        },
        {
          to: paths.projectLabNotes,
          children: "Lab Notes",
        },
      ]}
    />
  );
}
