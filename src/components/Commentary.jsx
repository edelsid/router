export function Commentary({ avatar }) {
  return (
   <div className="commentary">
      <img className="avatar" src={avatar}></img>
      <input className="inputField" placeholder="Напишите комментарий..."></input>
      <div className="icons">
         <span className="icon emotes"></span>
         <span className="icon photos"></span>
         <span className="icon gifs"></span>
         <span className="icon stickers"></span>
      </div>
   </div>
  )
}
