import "./Sourates.css";
import { Link, useParams } from "react-router-dom";
import Ayah from "../../Components/Ayah/Ayah";
import { useEffect, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";

function Sourates() {
  const params = useParams();

  const sourateNumber = params.id;
  console.log(sourateNumber);
  const [ayahs, setAyahs] = useState([]);
  const [sourateName, setSourateName] = useState("");

  useEffect(function () {
    fetch("https://api.alquran.cloud/v1/surah/" + sourateNumber)
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setAyahs(data.data.ayahs);
        setSourateName(data.data.name);
      });
  }, []);
  return (
    <div className="surah-page">
      <Link to={"/"} className="btn">
        retour
        <GiReturnArrow />
      </Link>
      <div dir="rtl">
        <h1 className="name">{sourateName}</h1>
        <div className="list-of-ayahs">
          {ayahs.map(function (ayah) {
            return <Ayah className="ayah" text={ayah.text} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Sourates;
