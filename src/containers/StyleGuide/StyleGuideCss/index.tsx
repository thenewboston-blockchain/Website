import React, {FC} from 'react';

import {A, CodeSnippet, DocContainer, DocImage, DocInlineCode, DocList, DocSubSection, SnippetLang} from 'components';

import FigmaImage from './figma.png';

enum StyleGuideCssNav {
  blocksElements = 'blocks-elements',
  blocksSassNesting = 'blocks-sass-nesting',
  capitalCase = 'capital-case',
  classPseudoSelectors = 'class-pseudo-selectors',
  clsx = 'clsx',
  componentScope = 'component-scope',
  cssAlphabetized = 'css-alphabetized',
  figma = 'figma',
  header = 'header',
  kebabCase = 'kebab-case',
  noGlobalSelectors = 'no-global-selectors',
  noImportant = 'no-important',
  sassAmpBem = 'sass-amp-bem',
}

const StyleGuideCss: FC = () => {
  return (
    <DocContainer className="StyleGuideCss" id={StyleGuideCssNav.header} title="CSS / SASS Style Guide">
      <p>
        One of our primary motivators when choosing a technology is to pick technologies that are widespread in
        professional use, as well as it being relatively easy to learn. For that reason, we chose to go with{' '}
        <A href="https://sass-lang.com/">SASS/SCSS</A> over other CSS Frameworks.
      </p>
      <p>
        In terms of class naming conventions, we chose to go with a somewhat modified version of the{' '}
        <A href="http://getbem.com/">BEM (Block__Element--Modifier)</A> naming convention. If you're not familiar with{' '}
        <DocInlineCode>BEM</DocInlineCode>, you can read more about it{' '}
        <A href="https://css-tricks.com/bem-101/">here</A>. BEM, in particular, works great with SASS because of the{' '}
        <A href="https://css-tricks.com/the-sass-ampersand/">SASS Ampersand (&) Operator</A>. You can read more about
        the benefits of why SASS+BEM in this{' '}
        <A href="https://css-tricks.com/using-sass-control-scope-bem-naming/">article</A>.
      </p>
      <p>
        We chose not to use any CSS Frameworks that provide global selectors (such as Bootstrap). Some of the reasons
        for this decision is that:
      </p>
      <DocList variant="ul">
        <li>CSS Frameworks are great for prototyping, but we already have designs built for us (in Figma).</li>
        <li>
          CSS Frameworks add extra complexity to our code, and it becomes an additional barrier for developers to learn.
        </li>
        <li>
          Modern CSS (such as <A href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</A> and{' '}
          <A href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Grids</A>) are more than sufficient to
          solve the CSS challenges.
        </li>
        <li>Refactoring becomes a headache when there is an over-reliance on a CSS Framework.</li>
      </DocList>
      <DocSubSection id={StyleGuideCssNav.figma} title="Figma">
        <p>
          <A href="https://www.figma.com/">Figma</A> is a interface design tool that is widely used in the professional
          sphere, and we use it to design how our app/website should exactly look. It is free to sign up. You can find
          the links to our Figma designs{' '}
          <A href="https://docs.google.com/document/d/1gRy71vQrHGDk2bZ4Wcz3ha4xHjNmOtcXCkDXtLeqt-4/edit">here</A>.
        </p>
        <p>
          The designs you find here <strong>shouldn't be taken as suggestions</strong>. Our goal as developers is to
          make it look as closely as possible with the designs. Fortunately, Figma makes that very easy to use for
          developers. You can see the exact dimensions of a given element, the colors of the background/borders/font,
          and so on.
        </p>
        <DocImage alt="figma example" bordered maxWidth={780} src={FigmaImage} />
      </DocSubSection>
      <DocSubSection
        id={StyleGuideCssNav.capitalCase}
        title="CapitalCase className for the root DOM element of a component"
      >
        <p>
          Every React component should have its root DOM element have its className be the CapitalCased version of the
          component name. Since every React Component should already follow the CapitalCase convention, this implies
          that the className should be completely identical with the name of the component. If the component needs its
          own custom styling, there should be an accompanying <DocInlineCode>SCSS</DocInlineCode> file with the same
          name.
        </p>
        <p>
          The <DocInlineCode>SCSS</DocInlineCode> file will have the CapitalCase class selector, and all accompanying
          selectors you need for that component will be nested inside the base selector. This, in conjunction with our
          other rule that every React Component should have an unique name, will ensure that there will never be CSS
          styling conflicts across different components.
        </p>
        <p>
          In <DocInlineCode>BEM</DocInlineCode> terminology, this className will be a{' '}
          <DocInlineCode>Block</DocInlineCode>.
        </p>
        <CodeSnippet
          code={`import React, {FC} from 'react';
        
import './LeftMenu.scss';
const LeftMenu: FC = () => {
  return (
    <div className="LeftMenu">
      {/* ... */}
    </div>
  );
};`}
          heading="Good (TSX File)"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`.LeftMenu {
  // All other selectors will be nested in here
}`}
          heading="Good (SCSS File)"
          language={SnippetLang.scss}
        />
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.kebabCase} title="kebab-casing for every other classNames">
        <p>
          With the exception of the previously mentioned CapitalCasing for a component's root DOM Element, every other
          Block, Element, or Modifier in a className should follow kebab-casing.
        </p>
        <CodeSnippet
          code={`return (
  <div className="TopNav">
    <div className="TopNav__buttonContainer">
      {/* ... */}
    </div>
  </div>
);`}
          heading="Bad"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`return (
  <div className="TopNav">
    <div className="TopNav__button-container">
      {/* ... */}
    </div>
  </div>
);`}
          heading="Good"
          language={SnippetLang.typescript}
        />
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.clsx} title="CLSX for conditional classNames">
        <p>
          We use the <A href="https://www.npmjs.com/package/clsx">CLSX</A> package to deal with conditional classNames.
        </p>
        <CodeSnippet
          code={`return <div className={\`LeftNav__nav \${selected === 'home' ? 'LeftNav__nav--active' : ''}\`}>Home</div>;`}
          heading="Bad"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`return (
  <div 
     className={clsx("LeftNav__nav", {
        "LeftNav__nav--active": selected === "home"
     })}
  >Home</div>
);`}
          heading="Good"
          language={SnippetLang.typescript}
        />
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.sassAmpBem} title="SASS Ampersand + BEM">
        <p>
          In order to have a consistent rule in how we write our CSS, as well as to avoid common problems such as{' '}
          <A href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">high CSS specificity</A>, we will be
          using the power of{' '}
          <A href="https://css-tricks.com/using-sass-control-scope-bem-naming/">
            SASS Ampersand + BEM Naming convention
          </A>
          . Let's see why this combination reduces specificity. Suppose we had this component:
        </p>
        <CodeSnippet
          code={`return (
   <div className="LeftNav">
      <div 
         className={clsx("LeftNav__nav", {
            "LeftNav__nav--active": selected === "home"
         })}
      >Home</div>
   </div>
);`}
          heading="LeftMenu.tsx"
          language={SnippetLang.typescript}
        />
        <p>
          There are three classNames we have to deal with: <DocInlineCode>.LeftNav</DocInlineCode>,{' '}
          <DocInlineCode>.LeftNav__nav</DocInlineCode>, and <DocInlineCode>.LeftNav__nav--active</DocInlineCode>. If you
          don't use SASS Ampersands, here is what the (bad) code will look like, and what it will transpile down to:
        </p>
        <CodeSnippet
          code={`.LeftMenu {
  color: var(--color-1);      
  
  .LeftMenu__nav {
    color: var(--color-2);
    
    .LeftMenu__nav--active {
      color: var(--color-3);
    }
  }
}`}
          heading="Bad (SCSS)"
          language={SnippetLang.scss}
        />
        <CodeSnippet
          code={`.LeftMenu {
  color: var(--color-1);
}

.LeftMenu .LeftMenu__nav {
  color: var(--color-2);
}

.LeftMenu .LeftMenu__nav .LeftMenu__nav--active {
  color: var(--color-3);
}`}
          heading="Bad (compiled CSS)"
          language={SnippetLang.scss}
        />
        <p>
          As you can see from this (bad) example, <DocInlineCode>.LeftMenu__nav</DocInlineCode> has a class level-2
          specificity, while <DocInlineCode>.LeftMenu__nav--active</DocInlineCode> has class level-3 specificity. If you
          ever need to override this, you will typically either have to use <DocInlineCode>!important</DocInlineCode>{' '}
          (not allowed), or do some CSS specificity gymnastics.
        </p>
        <p>This is what a good example looks like:</p>
        <CodeSnippet
          code={`.LeftMenu {
  color: var(--color-1);      
  
  &__nav {
    color: var(--color-2);
    
    &--active {
      color: var(--color-3);
    }
  }
}`}
          heading="Good (SCSS)"
          language={SnippetLang.scss}
        />
        <CodeSnippet
          code={`.LeftMenu {
  color: var(--color-1);
}

.LeftMenu__nav {
  color: var(--color-2);
}

.LeftMenu__nav--active {
  color: var(--color-3);
}`}
          heading="Good (compiled CSS)"
          language={SnippetLang.scss}
        />
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.blocksElements} title="Blocks vs. Elements">
        <p>
          One of the pain-points of <DocInlineCode>BEM</DocInlineCode> is the ambiguity of the distinction between
          Blocks and Elements. In order to keep it simple, this is the rule we are going to follow:
        </p>
        <DocList variant="ul">
          <li>
            Root component level DOM element (the one with CapitalCasing className) will always be treated as a{' '}
            <DocInlineCode>Block</DocInlineCode>.
          </li>
          <li>
            Every other (non-modifiers) DOM elements contained within that root DOM element should try to be considered
            as <DocInlineCode>Elements</DocInlineCode>, unless the said <DocInlineCode>Element</DocInlineCode> has so
            many sub-elements that need styling, in which case it will be converted to a{' '}
            <DocInlineCode>Block</DocInlineCode>.
          </li>
        </DocList>
        <p>This is probably best explained with a couple examples:</p>
        <p>
          <strong>
            1. A given DOM element with more elements inside doesn't need to be considered as a Block if the naming
            won't be too confusing:
          </strong>
        </p>
        <CodeSnippet
          code={`return (
  <div className="Component">
    <div className="header"> {/* Should I be considered a Block, since I have a span inside me? */}
      Hello <span className="header__color-text">WORLD!</span>
    </div>
    {/* ... */}
  </div>
);`}
          heading="Bad"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`return (
  <div className="Component">
    <div className="Component__header"> {/* Probably not */}
      Hello <span className="Component__header-bold">WORLD!</span> {/* I can just be considered another element of 
                                                                       Component without too much confusion */}
    </div>
    {/* ... */}
  </div>
);`}
          heading="Good"
          language={SnippetLang.typescript}
        />
        <p>
          <strong>
            2. However, if you are dealing with a complex component, this may not always be ideal. In this case, you can
            safely introduce a new block:
          </strong>
        </p>
        <CodeSnippet
          code={`return (
  <div className="Component">
    <div className="Component__left">
      {/* ... */}
      <div className="Component__left-button-container">
        <button className="Component__button-inside-left-button-container">Button</button> {/* This is too much */}
      </div>
    </div>
    <div className="Component__right">
      {/* ... */}
      <div className="Component__right-button-container">
        <button className="Component__button-inside-right-button-container">Button</button> {/* This is too much */}
      </div>
    </div>
    {/* ... */}
  </div>
);`}
          heading="Bad"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`return (
  <div className="Component">
    <div className="left-container"> {/* a new block */}
      {/* ... */}
      <div className="left-container__button-container">
        <button className="left-container__button">Button</button> {/* now it's manageable */}
      </div>
    </div>
    <div className="Component__right">
      {/* ... */}
      <div className="right-container">
        <button className="right-container__button">Button</button>
      </div>
    </div>
    {/* ... */}
  </div>
);`}
          heading="Good"
          language={SnippetLang.typescript}
        />
        <p>
          One note about above: you should only introduce one level of new blocks for a given component. If you need to
          use 2-level or more nested blocks within a given component, the component is (probably) better off being
          separated into multiple components. This point probably deserves a new section:
        </p>
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.blocksSassNesting} title="Blocks and level of SASS Nesting">
        <p>
          Continuing on with the previous point, each component should have at most one level of nested{' '}
          <DocInlineCode>blocks</DocInlineCode> within its root DOM element. Ideally, if the component is small enough,
          it doesn't need any blocks, but this is not always realistic. This is to ensure we don't have selectors within
          our SCSS that have too high of a specificity.
        </p>
        <CodeSnippet
          code={`.Component {
  .new-block {
    .new-new-block {
      // ...
    }
  }      
}`}
          heading="Bad"
          language={SnippetLang.scss}
        />
        <CodeSnippet
          code={`.Component {
  .new-block {
    &__element { // The 2-level nested block is converted to an element
      // ...
    }
  }      
}`}
          heading="Good"
          language={SnippetLang.scss}
        />
      </DocSubSection>
      <DocSubSection
        id={StyleGuideCssNav.componentScope}
        title="A component should only style DOM elements it knows about"
      >
        <p>
          For example, if a given container-component is to receive (either as a prop or a children) another React
          Component, it shouldn't expect to know that there is going to be an DOM element with a specific className and
          add styling to that class.
        </p>
        <CodeSnippet
          code={`return (
  <div className="PresentationalComponent">
    <div className="PresentationalComponent__left">{leftComponentProp}</div>
    {children}
  </div>
);`}
          heading="TSX Component"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`.PresentationalComponent {
  &__left {
    .i-know-this-class-is-in-here { // This is a class inside leftComponentProp
      // ...
    }
  }
}`}
          heading="Bad"
          language={SnippetLang.scss}
        />
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.noGlobalSelectors} title="No global selectors (AKA Bootstrap-like selectors)">
        <p>
          The only 'global' stylings we should have are the ones that override the defaults. These will be contained
          within the <DocInlineCode>styles</DocInlineCode> folder, and should rarely be touched.
        </p>
        <p>
          No matter how convenient it may be, we won't use global selectors (such as{' '}
          <DocInlineCode>.red-text</DocInlineCode> or <DocInlineCode>.fancy-table</DocInlineCode>). Instead, we will
          either have these classes defined within each component that needs to use them (following our other
          conventions, of course), or if used enough, we will create into a separate React component.
        </p>
        <CodeSnippet
          code={`.red {
  color: red;
}
.fancy-table {
  // some fancy table styling
}`}
          heading="Bad"
          language={SnippetLang.scss}
        />
        <CodeSnippet
          code={`const FancyTable: FC = ({props}) => {
  return (
    <table className="FancyTable">
      {/* ... */}
    </table>
  );
}`}
          heading="Good"
          language={SnippetLang.typescript}
        />
      </DocSubSection>
      <DocSubSection
        id={StyleGuideCssNav.classPseudoSelectors}
        title="Only use Class & Pseudo-Class/Element Selectors*"
      >
        <p>These are not allowed:</p>
        <CodeSnippet
          code={`#left-nav { // No id selectors
  // ...  
}
.LeftNav {
  a { // No HTML Element selectors
    // ...
  }
}`}
          heading="Bad"
          language={SnippetLang.scss}
        />
        <p>
          *The only exception to this rule is when dealing with nested HTML Elements that always go hand-in-hand, such
          as a <DocInlineCode>table</DocInlineCode> that always has accommodating elements such as{' '}
          <DocInlineCode>thead</DocInlineCode>, <DocInlineCode>tbody</DocInlineCode>, <DocInlineCode>tr</DocInlineCode>,{' '}
          <DocInlineCode>th</DocInlineCode>, <DocInlineCode>td</DocInlineCode>. Or a{' '}
          <DocInlineCode>ol/ul</DocInlineCode>, with its accompanying <DocInlineCode>li</DocInlineCode> element. In this
          case, you must give the root HTML element (such as <DocInlineCode>table</DocInlineCode> or{' '}
          <DocInlineCode>ol</DocInlineCode>) a className, and put all the HTML element selectors inside that class
          selector.
        </p>
        <CodeSnippet
          code={`return (
  <div className="Component">
    <table className="Component__table">
      <thead>
        <tr>
          <th>header 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>body 1</td>
        </tr>
      </tbody>
    </table>
    {/* ... */}
  </div>
);`}
          heading="TSX Component"
          language={SnippetLang.typescript}
        />
        <CodeSnippet
          code={`.Component {
  &__table {
    th, td {  // These HTML element selectors are okay, since they are inside .Component__table
      // ...
    }
  }
}`}
          heading="Good"
          language={SnippetLang.scss}
        />
      </DocSubSection>
      <DocSubSection
        id={StyleGuideCssNav.cssAlphabetized}
        title="CSS Selectors & CSS Properties should be alphabetized"
      >
        <CodeSnippet
          code={`.Component {
  &__banana {
    // ...
  }
  
  &__apple { // '&__apple' should come before '&__banana'
    display: flex;
    align-items: center;  // 'align-items' should come before 'display' property
    justify-content: center;
  }
}`}
          heading="Bad"
          language={SnippetLang.scss}
        />
      </DocSubSection>
      <DocSubSection id={StyleGuideCssNav.noImportant} title="No !important">
        <p>
          Ideally, if all the rules within this style guide is properly followed, there should never be a reason to use{' '}
          <DocInlineCode>!important</DocInlineCode>. There may arise special-cased exceptions in the future, but we will
          try our very best to never use this in our codebase.
        </p>
      </DocSubSection>
    </DocContainer>
  );
};

export default StyleGuideCss;
