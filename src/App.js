import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Mobile from "./components/mobile";
import NewsList from "./pages/NewsList";
import NewsView from "./pages/NewsView";
import Page from "./pages/Page";
import Category from "./pages/Category";
import PromoList from "./pages/Promo";
import Fav from "./pages/Fav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsView />} />
        <Route path="/category" element={<Category />} />
        <Route path="/promo" element={<PromoList />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/*" element={<Page />} />
      </Routes>
      <Footer />
      <Mobile />
    </BrowserRouter>
  );
}

export default App;
