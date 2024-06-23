import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
  const { data } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    data.setUser(false);
    navigate("/");
  };

  useEffect(() => {
    if (!data.user) {
      navigate("/");
    }
  }, [data.user]);

  return (
    <>
      <div className="container mt-3">
        <h2>Admin</h2>
        <button className="btn btn-warning" onClick={() => handleLogOut()}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default Admin;
