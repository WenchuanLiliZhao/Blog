import "./PageSection.scss";

interface Props {
  title: string;
  brief: string;

  children: JSX.Element[] | JSX.Element;
}

const PageSection: React.FC<Props> = ({ title, brief, children }) => {
  const header = (
    <header>
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="brief">{brief}</div>
      </div>
    </header>
  );

  const showHeader = 
    title != ""
    &&
    brief != ""
  

  return (
    <section className="page-section">
      {showHeader ? header : ""}
      <>{children}</>
    </section>
  );
};

export default PageSection;
