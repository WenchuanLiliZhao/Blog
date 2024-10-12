import "./_ArticleSection.scss"

interface Sec_Props {
  children: JSX.Element[]| JSX.Element;
  size?: "large" | "full";
}

const Sec: React.FC<Sec_Props> = ({ children, size }) => {
  return (
    <div className={`article-section ${size != undefined ? size : "normal"}`}>
      <>{children}</>
    </div>
  );
};

export default Sec