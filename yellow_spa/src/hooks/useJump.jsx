import { useNavigate } from "react-router-dom";

function useJump(id) {
  const navigate = useNavigate();
  if (id) {
    return () => navigate(`/details/${id}`);
  } else return () => navigate("/search4games/");
}

export default useJump;
