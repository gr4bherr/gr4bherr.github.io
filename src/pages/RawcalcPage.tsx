import { Link, Outlet } from "react-router-dom";

const RawcalcPage = () => {
  return (
    <>
      <h1>raw calc</h1>

      <h3>privacy policy</h3>
      <p>
        raw calc does not use or collect any user data whatsoever, nor do any
        third-party partners, as there are none.
      </p>

      <h3>support</h3>
      <p>
        if you encounter any bugs or have any questions, contact me via email:
        gr4bherr+rawcalc@fastmail.com
      </p>

      <Outlet />
    </>
  );
};

export default RawcalcPage;
