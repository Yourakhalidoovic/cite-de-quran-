import Sourates from "../../Page/Sourates/Sourates";
import "./Sourahitem.css";
import { Link } from "react-router-dom";

function Sourahitem(props) {
  return (
    <Link to={"/sourates/" + props.number} className="sourah-item">
      <div className="sourah-item__number">{props.number}</div>
      <div className="sourah-item__name">{props.name}</div>
      <div className="sourah-item__count">{props.numberOfAyahs}</div>
    </Link>
  );
}

export default Sourahitem;
