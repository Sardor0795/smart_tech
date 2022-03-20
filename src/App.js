import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Mobile from "./components/mobile";
import NewsList from "./pages/NewsList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
      </Routes>
      <Footer/>
      <Mobile/>
    </BrowserRouter>
  );
}

export default App;
