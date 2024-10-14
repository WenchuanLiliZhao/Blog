import React from 'react';
import katex from 'katex';

interface KatexProps {
  eq: string;
}

const Math: React.FC<KatexProps> = ({ eq }) => {
  const html = katex.renderToString(eq, {
    throwOnError: false
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Math;
