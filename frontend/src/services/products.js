import axios from "axios";

export const ProductsService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`,
      );

      // console.log("API Response:", { response }); // Log the entire response object
      if (!response.data) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};
