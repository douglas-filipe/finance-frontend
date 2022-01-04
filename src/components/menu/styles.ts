import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: white;
  position: fixed;
  height: 58px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;

  a {
    text-decoration: none;
  }
  a svg {
    width: 25px;
    height: 25px;
  }

  .Add {
    width: 50px;
    height: 50px;
    color: #459cff;
    transform: translateY(-30px);
    cursor: pointer;
  }
`;
