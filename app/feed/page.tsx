import data from "../../data/users.json"; 

export default function Feed() {
  const posts = data.posts;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">Лента постов</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="card">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
