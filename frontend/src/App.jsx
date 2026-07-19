import { Route, Routes } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./features/counter/counterSlice.js";

import Dashboard from "./pages/Dashboard.jsx";
import UserPage from "./pages/users/Page.jsx";
import ReportPage from "./pages/reports/Page.jsx";
import AuthLogin from "./pages/auth/Page.jsx";

import NavigationBar from "./components/NavigationBar.jsx";

const App = () => {
  const isAdmin = true;

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="app_root">
      {isAdmin && <div className="admin_side_bar">Admin Content</div>}

      <div className="main_content">
        <NavigationBar />
        {/* 
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <span>{count}</span>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div> */}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/login" element={<AuthLogin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
