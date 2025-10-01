import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            // <ProtectedRoute>
            <DefaultLayout />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
