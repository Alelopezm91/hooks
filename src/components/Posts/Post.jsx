import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postList } from "../../services/PostServices.js";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postList().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="PostList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => {
          const { title, id, body } = post;
          return (
            <Link key={id} to={`/${id}`}>
              <div className="country d-flex justify-content-center align-items-center flex-column">
                <h4 className="title mt-3">{title}</h4>
                <p className="mt-3">{body}</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};
