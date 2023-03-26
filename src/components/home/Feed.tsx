const Feed = async () => {
  const news = await fetch("/api/news/get/");
  return <div>{}</div>;
};

export default Feed;
