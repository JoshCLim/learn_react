import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <Link to="/"> Home </Link>
        {!user && <Link to="/login"> Login </Link>}
        {user && <Link to="/createpost"> Post </Link>}
      </div>

      <div>
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || "default.png"}
              width="20"
              alt="profile pic"
            />
            <button onClick={signUserOut}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export { Navbar };
