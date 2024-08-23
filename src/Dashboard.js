import { Outlet } from "react-router";
import { useNavigate } from "react-router";


function Dashboard() {
    const navigate = useNavigate();
  let dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={dashboardStyle}>
        <h1>Welcome to the DASHBOARD</h1>
        <p>
          We reserve this place to display some statistics about our website
        </p>
        <Outlet />
 <button
          
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default Dashboard;