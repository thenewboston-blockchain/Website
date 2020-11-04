/* eslint-disable no-bitwise */

export const isLight = (color: string): boolean => {
  let r: any;
  let g: any;
  let b: any;

  // Check the format of the color, HEX or RGB
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    const rgbComponents = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    [r, g, b] = rgbComponents as RegExpMatchArray;
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    const hexColor: any = color;
    const colorRgb = +`0x${hexColor.slice(1).replace(hexColor.length < 5 && /./g, '$&$&')}`;

    r = colorRgb >> 16;
    g = (colorRgb >> 8) & 255;
    b = colorRgb & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  return hsp > 127.5;
};
