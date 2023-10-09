import "./ListTitles.css";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <p className="p-title-container">{title}</p>
      <div className="circle-title"></div>
    </div>
  );
};

export function ListTitles() {
  return (
    <div className="list-titles">
      <Title title="Forms" />
      <Title title="Interactivity" />
      <Title title="Content" />
      <Title title="Web Components" />
      <Title title="Accessibility" />
      <Title title="Native-like Web App" />
      <Title title="Others tools & features" />
      <Title title="Usage" />
      <Title title="About you" />
      <Title title="Finish survey" />
    </div>
  );
}
