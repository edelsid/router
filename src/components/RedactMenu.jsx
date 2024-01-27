import { useParams, useNavigate } from "react-router-dom"

export function RedactMenu({ onRed }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const delMsg = () => {
    try {
      fetch(`https://router-crud-5y4f.onrender.com/${id}`, {
        method: 'DELETE',
      }).then(response => {
        if (response.status !== 204) {
          console.log('server error');
        } else {
          navigate('/router');
      }});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="options">
        <button className="addBtn" onClick={onRed}>Редактировать</button>
        <button className="addBtn" onClick={delMsg}>Удалить</button>
    </div>
  )
}
