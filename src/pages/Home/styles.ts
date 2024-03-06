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
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    h2 {
      font-size: 20px;
    }

    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      color: #299be4;

      svg {
        margin-right: 6px;
      }
    }
  }
`;

export const Table = styled.table`
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 30px;

  th {
    text-align: start;
    padding: 10px 20px;
    font-size: 14px;
  }

  td {
    border-top: 1px solid #dee2e6;
    padding: 10px 20px;
    color: #111;
  }

  td > a {
    padding: 2px 4px;

    &.edit {
      color: #2196f3;
    }
    &.search {
      color: #2196f3;
    }
    &.delete {
      color: #f44336;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  td.loading {
    font-size: 16px;
  }
`;
