import { Commentary } from "./Commentary";
import { RedactMenu } from "./RedactMenu";

export function Message({ item, avatar, status, onRed }) {
  const {id, content, created} = item;

  return (
    <div className="message">
      <header className="postHeader">
        <img className="avatar" src={avatar}></img>
        <div className="headerInfo">
          <p className="userName">User</p>
          <div className="additionalInfo">
            <p className="userStatus">Developer</p>
            <p className="created">{created}</p>
          </div>
        </div>
      </header>
      <main className="content">{content}</main>
      <footer className="footer">
        <div className="footerBtns">
          <button className="btn likeBtn">Нравится</button>
          <button className="btn commentBtn">Комментировать</button>
        </div>
      </footer>
      {status === 'main' && (<Commentary avatar={avatar}></Commentary>)}
      {status === 'see' && (<RedactMenu onRed={onRed}></RedactMenu>)}
    </div>
  )
}
