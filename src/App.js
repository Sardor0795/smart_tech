import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Mobile from "./components/mobile";
import NewsList from "./pages/NewsList";
import NewsView from "./pages/NewsView";
import Page from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsView />} />
        <Route path="/about" element={<Page />} />
      </Routes>
      <Footer/>
      <Mobile/>
    </BrowserRouter>
  );
}

export default App;
