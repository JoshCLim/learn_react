import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import "./navbar.css";

function Navbar() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="Navbar">
      <div className="NavbarLinks">
        <Link to="/" className="NavbarLink">
          Home
        </Link>
        {!user && (
          <Link to="/login" className="NavbarLink">
            Login
          </Link>
        )}
        {user && (
          <Link to="/createpost" className="NavbarLink">
            Post
          </Link>
        )}
      </div>
      <div className="Divider"></div>
      <div className="NavbarUser">
        {user && (
          <>
            <p className="NavbarUserName">{user?.displayName}</p>
            <img
              className="NavbarUserImage"
              src={user?.photoURL || "default.png"}
              width="40"
              height="40"
              alt="profile pic"
            />
            <button className="NavbarLogout" onClick={signUserOut}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export { Navbar };
