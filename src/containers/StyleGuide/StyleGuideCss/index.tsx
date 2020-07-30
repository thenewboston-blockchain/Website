import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {A, DocContainer, DocInlineCode, DocList, DocSubSection, TypescriptJsxCode} from 'components';

const StyleGuideCss: FC = () => {
  return (
    <DocContainer className="StyleGuideCss" title="CSS / SASS Style Guide">
      <p>
        Here are the rules that we should follow when working with React. We have{' '}
        <A href="https://eslint.org">ESLint</A> and <A href="https://prettier.io/">Prettier</A> configured, so for the
        sake of brevity, any rules that they enforce, we won't repeat here. If you are here to learn about how we decide
        on classNames for our JSX elements, please check out our <NavLink to="/style-guide/css">CSS/SASS</NavLink>{' '}
        section.
      </p>
      <DocSubSection title="Imports">
        <p>
          Imports from 3rd party packages will always be listed first. Dependencies with the word{' '}
          <DocInlineCode>react</DocInlineCode> will come first, followed by every other packages, alphabetically ordered
          by the package names.
        </p>
        <p>
          Then the local imports will come next, grouped by the type of the import (
          <DocInlineCode>components/containers/utils/types</DocInlineCode>), and each will be alphabetized.
        </p>
        <p>
          We will always use absolute imports, except when importing files that is contained within the same directory.
        </p>
        <TypescriptJsxCode
          code={`import React, {FC, ReactNode, useRef, useState} from 'react'; // 'react' imports come first
import {Redirect, NavLink} from 'react-router-dom';
import clsx from 'clsx'; // Then comes other 3rd party packages
import isEqual from 'lodash/isEqual';
import noop from 'lodash/noop';

import {DocContainer} from 'components'; // Importing local files
import {getCustomClassNames} from 'utils/components';

import FancyImage from './FancyImage.png'; // Then, files in the same directory
import './MyComponent.scss'; // Lastly, local style file import`}
          heading="Good"
        />
        <TypescriptJsxCode
          code={`import React, {useState, useRef, FC} from 'react'; // useState, useRef, FC not in alphabetical order
import clsx from 'clsx';
import {Redirect, NavLink} from 'react-router-dom'; // packages with react name should come before other packages
import noop from 'lodash/noop';

import {DocContainer} from '../../components'; // no relative imports outside of current directory
import {getCustomClassNames} from 'utils/components';`}
          heading="Bad"
        />
      </DocSubSection>
      <DocSubSection title="React components">
        <DocList variant="ol">
          <li>Only Functional Components. No Class-based components.</li>
          <li>
            Reusable components that doesn't connect to the redux store belong in the{' '}
            <DocInlineCode>components</DocInlineCode> directory. Components that connects to the store belong in the{' '}
            <DocInlineCode>containers</DocInlineCode> directory.
          </li>
          <li>Every React Component should have an unique name, even if it means being a little wordy.</li>
          <li>Props should always be alphabetized.</li>
          <li>
            DRY vs WET? Neither. We subscribe to the <A href="https://kentcdodds.com/blog/aha-programming">AHA</A>{' '}
            principle. Don't abstract for the sake of abstracting; abstract when it is appropriate.
          </li>
          <li>
            Use just the amount of JSX/HTML tags needed to get the job done. No need to have 2{' '}
            <DocInlineCode>div</DocInlineCode> when it could've been done with just one.
          </li>
          <TypescriptJsxCode
            code={`return (
<div>
  <div>
    Why am I in two divs?
  </div>
</div>
)`}
            heading="Bad"
          />
        </DocList>
      </DocSubSection>
      <DocSubSection title="Prop Spreading">
        <DocList variant="ol">
          <p>
            We are generally <strong>against prop spreading</strong>, as they make it really difficult to keep track of
            which props a component has access to. The only exception to this rule is when you are making a reusable
            base component in which other components will extend from, such as a{' '}
            <DocInlineCode>BaseButton</DocInlineCode>.
          </p>
          <TypescriptJsxCode
            code={`return (
  <SomeComponent {...props} />
)`}
            heading="Bad"
          />
          <TypescriptJsxCode
            code={`return (
  <SomeComponent
    propA={propA}
    propB={propB}
    propC={propC}
  />
)`}
            heading="Good"
          />
        </DocList>
      </DocSubSection>
      <DocSubSection title="Libraries We Use">
        <DocList variant="ul">
          <li>
            To handle forms, we use <A href="https://formik.org/">Formik</A> with{' '}
            <A href="https://github.com/jquense/yup">Yup</A> validation.
          </li>
          <li>
            We use <A href="https://redux-toolkit.js.org/">Redux Toolkit</A> to manage our application state. This is
            the official, recommended way to incorporate redux to a React application, and we favor it over traditional
            Redux architecture for it's compactness and ease-of-use.
          </li>
        </DocList>
      </DocSubSection>
    </DocContainer>
  );
};

export default StyleGuideCss;
