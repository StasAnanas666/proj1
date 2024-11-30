import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Contacts from "./Pages/Contacts/Contacts";

function App() {
    return (
        <div className="container-fluid-">
            <div className="d-flex flex-column min-vh-100">
                <Router>
                    <Header />
                    <main className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Routes>
                    </main>
                </Router>
                <Footer />
            </div>
        </div>
    );
}

export default App;
