import "./Quotes.scss"

interface Quote {
  sentence: string;
  from: string;
}

interface Props {
  quotes: Quote[];
}

// grid-template-columns: repeat(3, minmax(0, 1fr));

const Gallery_Quotes: React.FC<Props> = ({ quotes }) => {
  return (
    <>
      <div className="gallery-quotes">
        <div className="container"
          style={{
            gridTemplateColumns: `repeat(3, minmax(0, 1fr))`
          }}
        >
          {quotes.map((item: Quote, i: number) => (
            <blockquote key={`${item}${i}`} className="quote-in-gallery">
              <div className="sentence">{item.sentence}</div>
              <div className="from">——{item.from}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery_Quotes;
