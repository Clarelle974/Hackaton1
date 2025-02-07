import "../styles/homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="BackgroundHome">
      {/* <div className="container"> */}
      {/* <img src="/pirateDaccueil.png" alt="pirate" className="image-left" /> */}
      {/* <img src="parchemin.png" alt="parchemin" className="image-right" /> */}
      <div className="text-container">
        <p className="text">
          Écoutez bien, moussaillons du code ! Quand j’étais à votre place,
          j’écoutais d’une oreille… et je faisais des tic-tac avec ma chaise.
          Grossière erreur ! Un jour, mon équipage et moi, on s'est fait
          capturer par une bande de pirates redoutables. Et là, pas de bouton «
          Ctrl+Z » pour revenir en arrière ! Mais heureusement, j’avais retenu
          une chose essentielle : savoir coder, ça peut sauver des vies...
        </p>
        <p className="text">
          Le capitaine, un vrai requin des mers, voulait un tableau de bord
          ultra-sophistiqué pour traquer ses rivaux. Alors, ni une ni deux, j’ai
          sorti mon clavier imaginaire et codé une interface digne d’un amiral !
          Cartes interactives, suivi en temps réel des navires ennemis, et même
          un mode sombre (pour l’ambiance). Résultat ? On a gagné notre liberté
          et, cerise sur le tonneau, j’ai reçu une bourse en doublons ! Alors,
          les Wilders, ouvrez l'œil et affûtez vos skills… Vous ne savez jamais
          quand le code pourra vous sauver la mise !
        </p>
        {/* </div> */}
      </div>
      <Link to="/boardpage" className="link-board">
        Embarquer
      </Link>
    </div>
  );
}
