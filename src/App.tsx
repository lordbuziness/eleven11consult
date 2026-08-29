import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BloomTown from "./pages/BloomTown";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
    <Route path="/" element={<BloomTown />} />
    <Route path="/eleven11" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
        </BrowserRouter>
    );
}

export default App;