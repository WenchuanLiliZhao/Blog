/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Props {
  children: string
}

const Equation: React.FC<Props> = ({ children }) => {

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {`$$\\displaystyle ${children} $$`}
    </ReactMarkdown>
  );
};

export default Equation
