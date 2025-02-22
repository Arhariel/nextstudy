"use client";
import { useState } from "react";
import data from "../../data/users.json"; 
import Image from "next/image"; 

export default function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = data.users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">Пользователи</h1>
      <input
        type="text"
        placeholder="Поиск по имени..."
        className="w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.length > 0 ? (
        <ul className="space-y-4">
          {filteredUsers.map((user) => (
            <li key={user.id} className="card flex items-center gap-4">
              <Image
                src={user.avatar} 
                alt={user.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full shadow"
                style={{ objectFit: "cover" }}
              />
              <div className="flex flex-col">
                <a href={`/profile/${user.id}`} className="text-blue-600 font-semibold hover:underline">
                  {user.name}
                </a>
                <span className="text-gray-500 text-sm">{user.email}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">Пользователь не найден</p>
      )}
    </div>
  );
}
