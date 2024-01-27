import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../components/useFetch";
import { Message } from "../components/Message";
import { RedactMessage } from "../components/RedactMessage";
import avatar from "../img/avatar.png";

export function Post() {
  const { id } = useParams();
  const { data } = useFetch(`https://router-crud-5y4f.onrender.com/posts/${id}`);
  const [content, setContent] = useState();
  const [red, setRed] = useState(false);

  const onRed = () => {
    setRed(!red);
  };

  const getPost = () => {
    if (data) setContent(data.post);
  }

  useEffect(getPost, [data]);

  useEffect(() => {
    return () => {
      setContent();
    }
  }, [data]);

  const newData = (data) => {
    setContent(data.post);
  }

  if (!red) return (
    content && (<Message item={content} avatar={avatar} onRed={onRed} status={'see'}></Message>)
  )

  else if (red) return (
    content && (<RedactMessage item={content} avatar={avatar} onRed={onRed} newData={newData}></RedactMessage>)
  )
}
