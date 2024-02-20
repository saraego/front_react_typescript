import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

type ContainerProps = {
  $variant: "default" | "outline";
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem; //mesma coisa que 36px dividimos 36 pelo valor padrao do rem que é 16px 36/16 = 2.25rem
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.$variant === "default" ? theme.colors.primary : "transparent"};
  color: ${(props) =>
    props.$variant === "default" ? theme.colors.black : theme.colors.primary};
  border: 0;
  padding: 0 0.75rem;
  transition: all 0.4s;

  ${(props) =>
    props.$variant === "outline" &&
    css`
      border: 1px solid ${theme.colors.primary};
    `}

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
