import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Fetch the tools from your backend API
    axios
      .get(`${import.meta.env.VITE_API_URL}/tools`)
      .then((res) => setTools(res.data))
      .catch((err) => console.error("Error fetching tools:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Professional Business Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="text-gray-600 my-2">{tool.description}</p>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {tool.category}
            </span>
            <div className="mt-4">
              <Link
                to={`/tool/${tool.slug}`}
                className="text-blue-600 font-bold hover:underline"
              >
                View Professional Analysis →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
