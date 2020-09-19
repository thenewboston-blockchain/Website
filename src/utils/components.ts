import ReactGA from 'react-ga';

export const getCustomClassNames = (
  classNames: string | undefined,
  suffix: string,
  show: boolean,
): {[className: string]: boolean} => {
  const classNameList = classNames?.split(' ') || null;

  if (classNameList) {
    return classNameList.reduce(
      (acc, className) => ({
        ...acc,
        [`${className}${suffix}`]: show,
      }),
      {},
    );
  }

  return {};
};

export const initGA = () => {
  ReactGA.initialize('UA-56989641-1');
};

export const GApageView = (page: string) => {
  ReactGA.pageview(page);
};
