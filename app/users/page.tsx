import { ShowPostsButton } from "./components/ShowPostsButton";
import { getUsers } from "./users.service";

const tdCss = 'px-4 py-2';

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-800 text-white">
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th className={tdCss}>ID</th>
              <th className={tdCss}>Email</th>
              <th className={tdCss}>Nome</th>
              <th className={tdCss}>Posts</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className={tdCss}>{user.id}</td>
                <td className={tdCss}>{user.email}</td>
                <td className={tdCss}>{user.name}</td>
                <td className={tdCss}>
                  <ShowPostsButton user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}