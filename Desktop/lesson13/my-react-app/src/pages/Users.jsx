import React, { useMemo, useState } from "react";
import { users } from "./data";

function Users() {
    const [query, setQuery] = useState({
        search: "",
        age: 100
    });
    const [count, setCount] = useState(0);

    const filteredUsers = useMemo(() => {
        return users.filter(user => (user.name.toLocaleLowerCase().startsWith(query.search.toLocaleLowerCase())) && user.age <= query.age)
    }, [query]);

    const [form, setForm] = useState({ name: '', email: '' });

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
      <>
        <div>
          <input
            type="text"
            placeholder="Ismingiz"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        {/* ========== */}
        <div className="p-2">
          <div>
            <p>Count: {count}</p>
            <button onClick={decrement} className="m-2 ml-0 border py-1 px-4">
              Dec
            </button>
            <button onClick={increment} className="m-2 ml-0 border py-1 px-4">
              Inc
            </button>
          </div>

          <div className="py-2">
            <input
              value={query.search}
              onChange={(e) => setQuery({ ...query, search: e.target.value })}
              type="text"
              className="border px-3"
              placeholder="Search"
            />
            <br />
            {query.age}
            <input
              value={query.age}
              type="range"
              name="age"
              id="age"
              max={100}
              onChange={(e) => setQuery({ ...query, age: +e.target.value })}
            />
          </div>
          <table className="border min-w-[350px]">
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center border px-4">
                    No data
                  </td>
                </tr>
              ) : null}
              {filteredUsers.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td className="border px-4">{index + 1}</td>
                    <td className="border px-4">{user.name}</td>
                    <td className="border px-4">{user.age}</td>
                    <td className="border px-4">{user.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Users;