import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <input
          type="password"
          placeholder="Enter Admin Password"
          className="p-2 border rounded mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() =>
            password === "StotOps2026!" && setIsAuthenticated(true)
          }
        >
          Access Dashboard
        </button>
      </div>
    );
  }

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    affiliate_link: "",
    category: "",
    seo_title: "",
    seo_description: "",
    slug: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/tools`, formData);
      setLoading(false);
      alert("Tool added successfully!");
      // Reset form after success
      setFormData({
        title: "",
        description: "",
        affiliate_link: "",
        category: "",
        seo_title: "",
        seo_description: "",
        slug: "",
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Tool Management Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Tool Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Affiliate Link"
          onChange={(e) =>
            setFormData({ ...formData, affiliate_link: e.target.value })
          }
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="SEO Title (Google)"
          onChange={(e) =>
            setFormData({ ...formData, seo_title: e.target.value })
          }
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Slug (e.g., best-crm-tool)"
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Category (e.g., Infrastructure)"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Tool Title"
          value={formData.title} // Add this
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Saving..." : "Save Tool"}
        </button>
      </form>
    </div>
  );
}
