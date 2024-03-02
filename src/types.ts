import { User } from "./data/data";

export type BaseProps = {
  title: string;
};

export type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine: boolean;
};

export type UserTableProps = {
  users: User[];
};

export type ImageButtonProps = {
  image: string;
  onClick: () => void;
};
