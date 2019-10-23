import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? .7 : 1};

  /* 
    flex-grow: 0; Possibilidade de Esticar
    flex-shrink: 0; Possibilidade de Reduzir
    flex-basis: 320px; Tamanho base
  */

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
