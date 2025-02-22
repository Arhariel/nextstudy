export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Добро пожаловать!</h1>
      <p className="text-gray-600 mt-4">Выберите раздел:</p>
      <div className="flex gap-4 mt-6">
        <a href="/feed" className="bg-blue-500 text-white px-4 py-2 rounded">Лента</a>
        <a href="/users" className="bg-green-500 text-white px-4 py-2 rounded">Пользователи</a>
      </div>
    </div>
  );
}
