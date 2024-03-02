import { User } from "../data/data";

export default function UserTable({ users }: { users: User[] }) {
  return (
    <table className="userTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>email</th>
          <th>isActive</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User, index: number) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? "yes" : "no"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
