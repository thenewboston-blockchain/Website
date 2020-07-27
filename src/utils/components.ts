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
