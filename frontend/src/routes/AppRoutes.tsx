import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AppLayout from "../components/layouts/AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* auth routes */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* Protected routes */}
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
