import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/"); // redirect to home route
  };

  return (
    <div>
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>sign in with google</button>
    </div>
  );
}

export { Login };
