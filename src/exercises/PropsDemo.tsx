import { BaseProps } from "../types";
import Profile from "../component/Profile";
import { useState } from "react";

export default function PropsDemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Malte Bjørklund"
        email="mb@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Loxiuz Wontolla"
        email="lw@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
    </>
  );
}
