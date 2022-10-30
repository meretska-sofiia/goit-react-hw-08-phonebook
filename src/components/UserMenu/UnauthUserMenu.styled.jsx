import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #1976d2;
    }
  }
`;
