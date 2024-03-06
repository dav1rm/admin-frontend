import { styled } from "styled-components";

interface ContainerProps {
  flex?: number;
  width?: number;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 6px;

  ${(props) => !!props.flex && `flex: ${props.flex};`}
  ${(props) => !!props.width && `width: ${props.width}px;`}

  label {
    font-size: 12px;
    margin-bottom: 8px;
    color: #555;
  }

  span.error {
    font-size: 10px;
    color: #f44336;
  }

  input,
  select,
  button {
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
