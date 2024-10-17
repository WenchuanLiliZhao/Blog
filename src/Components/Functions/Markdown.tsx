/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';

interface Props {
  children: any
}

const Markdown: React.FC<Props> = ({ children }) => {

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown
