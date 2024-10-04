import { useEffect, useState } from "react";
import "./Reciteurs.css";
import ReciteurName from "../../Components/ReciteurName/ReciteurName";
function Reciteurs() {
  const [reciteurs, setreciteurs] = useState();
  useEffect(function () {
    fetch("https://api.alquran.cloud/v1/edition/format/audio")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setreciteurs(data.data);
      });
  }, []);

  return reciteurs.map(function (reciteur) {
    return <ReciteurName name={reciteur.name} />;
  });
}
export default Reciteurs;
