import styled, { DefaultTheme } from "styled-components";

interface IStyledButtonProps {
  theme?: DefaultTheme;
  disabled: boolean;
}

const BaseSummonButton = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  height: 50px;
  width: 50px;
`;

export const StyledButtonUp = styled(BaseSummonButton)`
  border-bottom: 15px solid black;
`;

export const StyledButtonDown = styled(BaseSummonButton)`
  border-top: 15px solid black;
`;
