import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const isActiveRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Read form inputs and submit the form to the parent
    const newName = nameRef.current?.value;
    const newEmail = emailRef.current?.value;
    const newIsActive = isActiveRef.current?.checked;

    if (
      newName !== undefined &&
      newEmail !== undefined &&
      newIsActive !== undefined
    ) {
      const newUser: User = {
        name: newName,
        email: newEmail,
        isActive: newIsActive,
      };
      onSubmitUser(newUser);
    } else {
      console.error("Values cannot be undefined");
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input ref={nameRef} name="name" />
        Email: <input ref={emailRef} name="email" />
        Active: <input ref={isActiveRef} type="checkbox" name="isActive" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
