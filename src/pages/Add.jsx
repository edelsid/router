import avatar from "../img/avatar.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Add() {
  const navigate = useNavigate();
  const [data, setData] = useState('');

  const addMsg = (e) => {
    e.preventDefault();
    try {
      fetch('https://router-crud-5y4f.onrender.com/posts', {
        method: 'POST',
        body: JSON.stringify({content: data}),
      }).then(response => {
        if (response.status !== 204) {
          console.log('server error');
        }
      });
    } catch (error) {
      console.log(error);
    }
    navigate('/router');
  };

  const inputChange = (e) => {
    const {name, value} = e.target;
    setData (value);
  }

  return (
    <div className="message">
      <nav className="header addHeader">
        <button className="btn msgBtn publ">Публикация</button>
        <button className="btn msgBtn media">Фото/Видео</button>
        <button className="btn msgBtn stream">Прямой эфир</button>
        <button className="btn msgBtn more">Еще</button>
        <Link to="/router" className="addBtn btn msgBtn exit"></Link>
      </nav>
      <form className="addPage" onSubmit={addMsg}>
        <div className="formInput">
          <img className="avatar" src={avatar}></img>
          <input id="data"
            name="data"
            value={data}
            onChange={inputChange}
            className="inputField"
            placeholder="Напишите сообщение...">
          </input>
        </div>
        <button className="addBtn" type="submit">Опубликовать</button>
      </form>
    </div>
  )
}
