import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function ToolDetail() {
  const { slug } = useParams();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    // Fetch tool by slug
    axios.get(`${process.env.REACT_APP_API_URL}/tools/${slug}`)
      .then(res => setTool(res.data));
  }, [slug]);

  if (!tool) return <div>Loading professional insight...</div>;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{tool.seo_title}</title>
        <meta name="description" content={tool.seo_description} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{tool.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{tool.description}</p>
        <a 
          href={tool.affiliate_link} 
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold"
          target="_blank" rel="sponsored"
        >
          Get Professional Pricing
        </a>
      </div>
    </HelmetProvider>
  );
}