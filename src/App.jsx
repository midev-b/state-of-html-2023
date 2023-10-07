import { useState } from "react";

import "./App.css";
import { LogoArticle } from "./Components/LogoArticle";
import { Header } from "./Components/Header";
import { FaqArticles } from "./Components/FaqArticles";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />

      <div className="articles-container">
        <LogoArticle />
        <FaqArticles />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
