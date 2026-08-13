import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BloomTown from "./pages/BloomTown";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bloomtown" element={<BloomTown />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;