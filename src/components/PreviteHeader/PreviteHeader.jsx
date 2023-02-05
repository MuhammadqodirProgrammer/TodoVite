import React, { useContext } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContex";
export const PreviteHeader = () => {
  const { user ,setUser } = useContext(UserContext);
  const {setToken} =useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <header className="bg-dark  py-3">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link to="/" className="fs-4 text-white text-decoration-none">
            LOGO
          </Link>
          <Link className="ms-3 text-white text-decoration-none " to="/posts">
            Posts
          </Link>
          <Link className="ms-3 text-white text-decoration-none " to="/users">
            Users
          </Link>
          <button
            className="btn btn-warning rounded-circle py-2 px-2 ms-auto"
            onClick={() => {
              setToken("");
               setUser("")
               navigate('/')
            }}
          >
            {user.first_name.at(0) + "." + user.last_name.at(0)}
          </button>
        </div>
      </div>
    </header>
  );
};
