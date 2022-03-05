import styled, { css, DefaultTheme } from "styled-components";

interface IStyledElevatorProps {
  theme: DefaultTheme;
  currentFloor: boolean;
}

export const FloorElement = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ currentFloor, theme }: IStyledElevatorProps) =>
    currentFloor ? theme.colors.tertiary : theme.colors.primary};
  color: ${({ theme }: IStyledElevatorProps) => theme.colors.secondary};
  font-weight: bold;
  border: 2px solid
    ${({ theme }: IStyledElevatorProps) => theme.colors.secondary};
`;

export const FloorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
