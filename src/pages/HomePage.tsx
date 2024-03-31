import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <ul>
      <li>
        <a href="https://github.com/gr4bherr">github</a>
      </li>
      <li>
        <Link to="rawcalc">raw calc</Link>
      </li>
    </ul>
  );
};

export default HomePage;
