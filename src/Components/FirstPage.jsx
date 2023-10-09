import "./FirstPage.css";
import { LogoArticle } from "./LogoArticle";
import { Header } from "./Header";
import { FaqArticles } from "./FaqArticles";
import { Footer } from "./Footer";

export function FirstPage() {
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
