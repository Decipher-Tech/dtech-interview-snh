const fetchPostData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    if (data.posts && data.posts.length > 0) {
      const firstTenPosts = data.posts.slice(0, 10);
      return firstTenPosts;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export default fetchPostData;
