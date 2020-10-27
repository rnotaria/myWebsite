import React from "react";
import CoverImage from "./Main_Components/CoverImage";
import Options from "./Main_Components/Options/Options";
import Profile from "./Main_Components/Profile";
import Construction from "./Main_Components/Construction";

export default function MySite() {
  return (
    <div>
      <CoverImage />
      <Options />
      {/* <Profile /> */}
    </div>
  );
}
