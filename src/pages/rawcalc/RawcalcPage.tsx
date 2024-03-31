import { Link } from "react-router-dom";

const RawcalcPage = () => {
  return (
    <ul>
      <li>
        <Link to="support">support</Link>
      </li>
      <li>
        <Link to="privacypolicy">privacy policy</Link>
      </li>
    </ul>
  );
};

export default RawcalcPage;
