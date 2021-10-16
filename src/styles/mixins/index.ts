import {css} from 'styled-components';

export const topNavButton = css`
  align-items: center;
  background: transparent;
  border: none;
  color: var(--color-sail-gray-500);
  cursor: pointer;
  display: flex;
  font-weight: var(--font-weight-medium);
  justify-content: center;
  transition: color 0.1s ease;

  &:hover,
  &:active {
    color: var(--color-primary);
  }
`;
