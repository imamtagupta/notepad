import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      set({ blogs: data });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  },
}));

export default useBlogStore;