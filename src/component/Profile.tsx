import { ProfileProps } from "../types";

export default function Profile({
  name,
  email,
  isActive,
  singleLine,
}: ProfileProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Active: {`${isActive}`}</p>
      <p>Single Line: {`${singleLine}`}</p>
    </div>
  );
}
