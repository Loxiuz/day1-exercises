import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../component/UserTable";
import UserForm from "../component/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here

  const nextId =
    1 +
    users.reduce((max, user) => (user.id > max ? user.id : max), users[0].id);

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    //This is the only place you have to change something
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    console.log(users);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
