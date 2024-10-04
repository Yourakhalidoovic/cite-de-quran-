import "./Home.css";

import Hero from "../../Components/Hero/Hero.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Sourahitem from "../../Components/Sourahitem/Sourahitem.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { useEffect, useState } from "react";

function Home() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/meta")
      .then((response) => response.json())
      .then((data) => {
        setSurahs(data.data.surahs.references);
      });
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <div className="list-of-sourates">
        {surahs.map(function (Surah) {
          return (
            <Sourahitem
              name={Surah.name}
              number={Surah.number}
              numberOfAyahs={Surah.numberOfAyahs}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
