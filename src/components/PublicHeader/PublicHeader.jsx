import React from "react";
import { Link } from "react-router-dom";

export const PublicHeader = () => {
  return (
    <header className="bg-dark  py-3">
    <div className="container">
        <div className="d-flex align-items-center">
            <Link  to='/' className="fs-4 text-white text-decoration-none">LOGO</Link>
<Link className="ms-auto btn btn-outline-primary " to='/login'>SIGN IN</Link>
<Link className="ms-3 btn btn-outline-success " to='/register' >SIGN UP</Link>
        </div>
    </div>
    </header>
  );
};
