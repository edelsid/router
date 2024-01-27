import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Message } from '../components/Message'
import { useFetch } from '../components/useFetch';
import avatar from "../img/avatar.png";

export function Home() {
  const { data } = useFetch('https://router-crud-5y4f.onrender.com/posts');
  const [posts, setPosts] = useState();

  const getPosts = () => {
    if (data) setPosts(data);
  }

  useEffect(getPosts, [data]);

  useEffect(() => {
    return () => {
      setPosts();
    }
  }, [data]);

  return (
    <div className="page">
      <nav className="header">
        <Link to="/posts/new" className="addBtn">Создать пост</Link>
      </nav>
      {posts && (<main className="posts">
        {posts.map((item) => (
          <Link to={`/posts/${item.id}`} key={item.id}>
            <Message item={item} avatar={avatar} status={'main'}/>
          </Link>
        ))}
      </main>)}
    </div>
  )
}
