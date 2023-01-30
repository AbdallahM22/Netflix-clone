import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
import Trending from "./components/Trending";
import Pricing from "./components/Pricing";
import { ThemeContextProvider } from "./components/store/theme-context";

function App() {
  return (
    <ThemeContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={'/movies'}/>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
    </ThemeContextProvider>
  );
}

export default App;
