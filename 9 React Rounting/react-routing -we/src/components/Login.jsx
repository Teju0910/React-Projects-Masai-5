import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { handelAuth } = useContext(AuthContext);
const navigate = useNavigate()

  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <button
        onClick={() => {
          handelAuth(true);
          navigate(-2,{replace :true}) //use according to stack
        }}
      >
        Submit
      </button>
    </div>
  );
};
