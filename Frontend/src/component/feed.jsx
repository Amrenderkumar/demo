import React from "react";
import axios from "axios";

const Feed = () => {

const [posts, setPosts] = React.useState([]);

React.useEffect(() => {
    axios.get("http://localhost:5001/get-image")
        .then(response => {
            setPosts(response.data.data);
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
}, []);

return (
<section className="min-h-screen bg-gray-50 py-12 px-4">
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Image Feed
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >

          <div className="relative">
            <img
              src={post.image}
              alt={post.description}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>

          <div className="p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {post.description}
            </p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>
);
};

export default Feed;