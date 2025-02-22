import data from "../../../data/users.json"; 
import Image from "next/image"; 

export default function Profile({ params }: { params: { id: string } }) {
  const user = data.users.find((u) => u.id.toString() === params.id);

  if (!user) {
    return <h1 className="text-2xl text-red-500 text-center">Пользователь не найден</h1>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow rounded-xl text-center">
      <Image
        src={user.avatar} 
        alt={user.name}
        width={96}
        height={96}
        className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4"
        style={{ objectFit: "cover" }}
      />
      <h1 className="text-3xl font-semibold mb-4">{user.name}</h1>
      <div className="text-gray-700 space-y-2 text-left">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Телефон:</strong> {user.phone}</p>
        <p><strong>Веб-сайт:</strong> 
          <a href={`https://${user.website}`} target="_blank" className="text-blue-600 ml-1 hover:underline">
            {user.website}
          </a>
        </p>
      </div>
      <a href="/users" className="mt-6 block text-blue-600 text-center hover:underline">Назад</a>
    </div>
  );
}
