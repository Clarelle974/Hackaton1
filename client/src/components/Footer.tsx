import "../styles/footer.css";
import logo from "/cranepirate.png";

export default function Footer() {
  return (
    <footer>
      <h2 className="footer-title">
        Cette embarcation appartient a notre equipage !
      </h2>
      <div className="mid-footer">
        <img src={logo} alt="" className="imgfooter" />
        <ul className="team">
          <li>L’Ombre du Vieux Kraken (Christophe)</li>
          <li>La Sirène Enragée (Clarelle)</li>
          <li>Le Marins des Profondeurs (Maxime)</li>
          <li>Le Vieux Pirate au Rhum (Alex)</li>
        </ul>
      </div>
      <p className="footer-title">
        © 2025 Pirates Crew - Tous droits réservés. Argh!
      </p>
    </footer>
  );
}
