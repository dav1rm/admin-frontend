import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 50px;

  header {
    display: flex;
    margin-bottom: 10px;

    h2 {
      font-size: 20px;
    }

    a {
      font-size: 22px;
      color: #299be4;

      svg {
        margin-right: 10px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 30px;

    .row {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      margin-bottom: 6px;
    }

    button {
      border-radius: 5px;
      background-color: #299be4;
      border: none;
      color: white;
      padding: 10px 30px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      margin: 4px 10px;
      cursor: pointer;

      &:hover {
        background-color: #268bcd;
      }
    }
  }
`;
