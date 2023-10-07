import html2023 from "../images/html2023.png";
import "./LogoArticle.css";

export function LogoArticle() {
  return (
    <div>
      <h1>
        <img className="img-logo" src={html2023} />
      </h1>
      <p>
        While web developers tend to focus on JavaScript and CSS, none of what
        we do would be possible without HTML acting as the foundation. It has
        long seemed like HTML wasn't evolving, but things may be changing. New
        elements like &nbsp;
        {"<selectlist>"}&nbsp; are on the horizon, cool new features like
        popovers, and a swath of related browser APIs (Web Components, PWAs,
        etc.).
        <br /> This year, Lea Verou took on the formidable task of leading the
        design of this brand new survey, from content to UX and beyond. Building
        on the success of State of JS and State of CSS, we introduce State of
        HTML; the last missing piece that completes the trilogy, so we can track
        the evolution of the web platform as a whole.
        <br />
        <br />
        Benefits to you:
        <ul>
          &nbsp; &nbsp;{" "}
          <li>
            Survey results are used by browsers and standards groups for roadmap
            prioritization. Your responses can help get features you care about
            implemented, browser incompatibilities being prioritized, and gaps
            in the platform being addressed.
          </li>
          &nbsp; &nbsp;{" "}
          <li>
            Learn about new and upcoming features; add features to your reading
            list and get a list of resources at the end!
          </li>
          &nbsp; &nbsp;{" "}
          <li>
            Get a personalized knowledge score and see how you compare to other
            respondents
          </li>
        </ul>
        The survey will be open for 3 weeks, but responses entered within the
        first 9 days (until October 1st) will have a much higher impact on the
        Web, as preliminary data will be used for certain prioritization efforts
        that have deadlines before then.
      </p>
      <div className="continue-button">
        <div className="continue-p">
          <p> Continue Survey</p>
        </div>
        <p>
          <span>
            Last modified on Wed Oct 04 2023 <br />
            1% completed
            <br />
            <br />
          </span>
        </p>
      </div>
    </div>
  );
}
