import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import RestaurantList from "./pages/customer/RestaurantList";
function App() {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="restaurants"
          element={
            <PrivateRoute roles={["User"]}>
              <RestaurantList />
            </PrivateRoute>
          }
        />
        
        {loggedIn ? (
          <Route index element={<Dashboard />} />
        ) : (
          <Route index element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
