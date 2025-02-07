import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      {" "}
      <section className="left-aside">
        <Link to="/crew">
          <h2>Mon equipage</h2>
        </Link>
        <br />
        <Link to="/enemyships">
          <h2>Mes ennemis</h2>
        </Link>
        <br />
        <Link to="/shop">
          <h2>Longue-Vue Shopping</h2>
        </Link>
        <br />
        <Link to="/weather">
          <h2>Meteo</h2>
        </Link>
        <br />
      </section>
    </>
  );
}
