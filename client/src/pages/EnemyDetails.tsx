import { useParams } from "react-router-dom";
import { naviresEnnemis } from "../services/data";
import "../styles/enemy-details.css";

export default function EnemyDetails() {
  const { nom } = useParams();
  const ship = naviresEnnemis.find((s) => s.nom === nom);
  return (
    <>
      <section className="enemyDetails">
        <h2>{ship?.nom}</h2>
        <div className="details-container">
          <img src={ship?.img} alt="navire" />
          <div className="text-container">
            <h2>Capitaine : {ship?.capitaine}</h2>
            <h3>Type : {ship?.type}</h3>
            <h3>Armement : </h3>
            <p className="desc">{ship?.armement}</p>
            <p>Taille de l'équipage :{ship?.tailleEquipage}</p>
            {/* </div> */}
            {/* <div className="details"> */}
            <h3>Particularite :</h3>
            <p className="desc">{ship?.particularite}</p>
            <h3>Reputation :</h3>
            <p className="desc">{ship?.reputation}</p>
          </div>
        </div>
      </section>
    </>
  );
}
