import "../styles/homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="BackgroundHome">
      <div className="text-container">
        <p className="text">
          Écoutez bien, moussaillons du code ! Quand j’étais à votre place,
          j’écoutais d’une oreille… et je faisais des tic-tac avec ma chaise.
          Grossière erreur ! Un jour, mon équipage et moi, on s'est fait
          capturer par des pirates redoutables. Et là, pas de bouton « Ctrl+Z »
          ou de "Git reset " pour revenir en arrière ! Mais heureusement: savoir
          coder, ça peut sauver des vies...
        </p>
        <p className="text">
          Nous avons pu négocier avec le capitaine, un vrai requin des mers.
          Notre liberté contre un tableau de bord pour traquer ses rivaux.
          Alors, ni une ni deux, j’ai sorti mon clavier imaginaire et codé une
          interface digne d’un amiral ! Cartes interactives, suivi en temps réel
          des navires ennemis, et même un accès aux dernières actus de la
          piraterie. Résultat ? Nous avons intégré l'équipage ! Alors, les
          Wilders, ouvrez l'œil et affûtez vos skills… Vous ne savez jamais
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
