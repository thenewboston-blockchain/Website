import styled from 'styled-components';

type Props = {
  color: string;
  emojiSize: number;
  marginBottom: number;
  size: number;
};

export const Container = styled.div<Props>`
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  font-size: ${(props) => props.emojiSize}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  margin-bottom: ${(props) => props.marginBottom}px;
  width: ${(props) => props.size}px;
`;
