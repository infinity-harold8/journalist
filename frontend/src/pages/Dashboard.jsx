import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link to="/reports">Go to Reports</Link>
    </div>
  );
};

export default Dashboard;
