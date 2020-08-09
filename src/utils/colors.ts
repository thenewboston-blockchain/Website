/* eslint-disable no-bitwise */

export const isLight = (color: any) => {
  let r;
  let g;
  let b;

  // Check the format of the color, HEX or RGB
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    [r, g, b] = color;
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    const chunk = color.slice(1).replace(color.length < 5 && /./g, '$&$&');
    color = +`0x${chunk}`;

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  return hsp > 127.5;
};
