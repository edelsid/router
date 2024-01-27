import { useParams } from "react-router-dom"
import { useState } from "react";

export function RedactMessage({ item, avatar, onRed, newData }) {
   const { content } = item;
   const { id } = useParams();
   const [data, setData] = useState(content);

   const inputChange = (e) => {
      const {name, value} = e.target;
      setData (value);
   }

   const saveChanges = (e) => {
      e.preventDefault();
      try {
      fetch(`https://router-crud-5y4f.onrender.com/posts/${id}`, {
         method: 'POST',
         body: JSON.stringify({content: data}),
      }).then(response => {
         if (response.status !== 200) {
            console.log('server error');
         } else {
            response.json().then(data => {
            console.log(data);
            newData(data);
            onRed();
         })}
      });
      } catch (error) {
      console.log(error);
      }
   }

   return (
      <div className="message">
         <nav className="header addHeader">
            <p className="text">Редактировать публикацию</p>
            <button className="addBtn btn msgBtn exit" onClick={onRed}></button>
         </nav>
         <form className="redForm" onSubmit={saveChanges}>
            <div className="commentary">
               <img className="avatar" src={avatar}></img>
               <input className="inputField"
               id="data"
               name="data"
               value={data}
               onChange={inputChange}>
               </input>
            </div>
            <div className="operations">
               <button className="btn operBtn media">Фото/Видео</button>
               <button className="btn operBtn friends">Отметить друзей</button>
               <button className="btn operBtn emotes">Чувства/действия</button>
               <button className="btn operBtn places">Отметить посещение</button>
               <button className="btn operBtn gifs">GIF</button>
            </div>
            <button className="addBtn" type="submit">Сохранить</button>
         </form>
      </div>
   )
}
