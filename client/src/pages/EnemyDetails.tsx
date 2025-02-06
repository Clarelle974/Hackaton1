import { naviresEnnemis } from "../services/data";
import { useParams } from "react-router-dom";

export default function EnemyDetails() {
  const { nom } = useParams();
  const ship = naviresEnnemis.find((s) => s.nom === nom);
  return (
    <>
      <h2>{ship?.nom}</h2>
      <h3>Capitaine : {ship?.capitaine}</h3>
      <p>Type :{ship?.type}</p>
      <p>Armement :{ship?.armement}</p>
      <p>Particularité :{ship?.particularite}</p>
      <p>Réputation :{ship?.reputation}</p>
      <p>Taille de l'équipage :{ship?.tailleEquipage}</p>
    </>
  );
}
