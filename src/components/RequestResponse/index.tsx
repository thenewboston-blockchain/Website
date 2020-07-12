import React, {FC} from 'react';

import CodeHighlighter from 'components/CodeHighlighter';

import './RequestResponse.scss';

interface ComponentProps {
  code: string;
  heading: string;
}

const RequestResponse: FC<ComponentProps> = ({code, heading}) => {
  return (
    <div className="RequestResponse">
      <div className="heading">{heading}:</div>
      <CodeHighlighter code={code} language="json" showLineNumbers={false} />
    </div>
  );
};

export default RequestResponse;
