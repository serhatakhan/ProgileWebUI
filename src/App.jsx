import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import KanbanPage from "./pages/KanbanPage";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import SettingsPage from "./pages/SettingsPage";
import HomePage from './pages/HomePage';
import Loader from "./components/CustomComponents/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
    {loading && <Loader />}
      <Routes>
        <Route exact path="/login" element={<AuthPage setLoading={setLoading} />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<KanbanPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
