import React, {FC} from 'react';

import CodeHighlighter from 'components/CodeHighlighter';

import './Commands.scss';

interface ComponentProps {
  code: string;
  comment?: string;
}

const Commands: FC<ComponentProps> = ({code, comment}) => {
  return (
    <div className="Commands">
      {comment && <div className="comment">{comment}</div>}
      <CodeHighlighter code={code} language="bash" light showLineNumbers={false} />
    </div>
  );
};

export default Commands;
