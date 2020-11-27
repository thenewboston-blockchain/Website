import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';
import ProductDevelopment from './ProductDevelopment.png';

const InternalProductDevelopment: FC = () => {
  return (
    <DocContainer className="InternalProductDevelopment" title="Product Development">
      <DocImage alt="product development" maxWidth={1200} src={ProductDevelopment} />

      <p>
        <strong>Overview</strong>
      </p>

      <p>Direction of the product is decided based on multiple sources such as:</p>

      <DocList variant="ul">
        <li>Research Teams advice</li>
        <li>user feedback and analytics</li>
        <li>decisions from various internal meetings</li>
        <li>etc...</li>
      </DocList>

      <p>
        <strong>Steve</strong>
      </p>

      <DocList variant="ul">
        <li>Focus on website</li>
        <li>Provide user feedback and analytics to design team</li>
        <li>Suggest better methods on how to gather user feedback</li>
        <li>Optimize user feedback loop</li>
        <li>Receive final design and write issues to handoff to engineering</li>
        <li>Communicate requirements to engineering team</li>
        <li>
          Over engineering process from development {'>'} QA {'>'} deployment
        </li>
        <li>Find bottleneck within engineering process and offer solutions</li>
      </DocList>

      <p>
        <strong>Rahul</strong>
      </p>

      <DocList variant="ul">
        <li>Focus on blockchain related products (account manager & libraries)</li>
        <li>Prioritize which features that need to get built in account manager</li>
        <li>Sort through issues on GitHub related to account manager</li>
        <li>Discuss payment libraries requirements with Bucky</li>
        <li>Communicate requirements to engineering team</li>
        <li>
          Oversee engineering process from development {'>'} QA {'>'} security {'>'} deployment
        </li>
        <li>Find bottleneck within engineering process and offer solutions</li>
      </DocList>
    </DocContainer>
  );
};

export default InternalProductDevelopment;
