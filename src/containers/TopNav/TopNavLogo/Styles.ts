import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const LinkContainer = styled(NavLink)`
  align-items: center;
  background-color: transparent;
  border-right: none;
  display: flex;
  margin-left: 24px;
  padding: 8px 0;

  @media (max-width: 1200px) {
    margin-left: 12px;
  }
`;

export const Image = styled.img`
  height: 30px;
  margin-right: 6px;
`;
