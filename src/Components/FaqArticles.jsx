import "./FaqArticles.css";
const Question = ({ question }) => {
  return <p className="question">{question}</p>;
};

const Article = ({ container }) => {
  return <p className="article">{container}</p>;
};

export function FaqArticles() {
  return (
    <div className="faq-container">
      <p className="faq">FAQ</p>

      <div className="questions-container">
        <div className=" question-container">
          <Question question="How long will answering the survey take?" />
          <Article
            container="Depending on how many questions you answer 
        (all questions are optional), filling out the survey should take around 15-20 minutes."
          />
        </div>
        <div className=" question-containter">
          <Question question="What are the survey's goals?" />
          <Article
            container="The survey's goals are to measure awareness of new HTML
         features and browser APIs, and help developers keep
          track of how their usage is evolving."
          />
        </div>
        <div className=" question-container">
          <Question question="When will the results be released?" />
          <Article
            container="The survey will run from September 19 to October 10,
         and the survey results will be released shortly after that."
          />
        </div>
        <div className=" question-containter">
          <Question question="How was this survey designed?" />
          <Article
            container="The survey was designed by Lea Verou, with input from browser vendors
         as well as groups such as the WebDX Community Group."
          />
        </div>

        <div className=" question-container">
          <Question question="Who should take this survey?" />
          <Article
            container="This is an open survey for anybody who makes websites or web apps, whether
         regularly or occasionally, as part of their job, as a student, or just for fun!"
          />
        </div>
        <div className=" question-containter">
          <Question question="How will this data be used?" />
          <Article
            container="All data collected will be released openly for any developer or company to consult. 
        Browser vendors also use this data to prioritize focus areas and inform their roadmaps."
          />
        </div>
        <div className=" question-container">
          <Question question="Who runs this survey?" />
          <Article
            container="This survey is run by Devographics together with a 
        collective of contributors, translators, and volunteers."
          />
        </div>
        <div className=" question-containter">
          <Question question="Where can I learn more?" />
          <Article
            container="You can learn more about this survey
           in our announcement post."
          />
        </div>
      </div>
    </div>
  );
}
//
