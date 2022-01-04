import styled from "styled-components";

export const Container = styled.main`
  width: 85vw;
  height: 100%;
  margin: auto;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #022378;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 27px;
    h1 {
      font-size: 18px;
      font-weight: 200;
      span {
        font-weight: bold;
      }
    }
    svg {
      width: 25px;
      height: 25px;
    }
  }

  .total {
    width: 209px;
    background: #0860d8;
    margin: auto;
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:nth-child(1) {
      color: white;
      font-size: 14px;
    }
    p:nth-child(2) {
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .Calc {
    width: 100%;
    display: flex;
    margin: 30px auto;
    gap: 56px;
    font-size: 13px;

    .Input,
    .Leave {
      display: flex;
      align-items: center;
      p:nth-child(2) {
        font-weight: bold;
      }
      .Icon {
        background: #9dd8fe;
        width: 35px;
        height: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 11px;
        margin-right: 10px;
      }
      svg {
        color: #0860d8;
        height: 20px;
        width: 20px;
      }
    }

    .Leave {
      .Icon {
        background: #ffb1a5;
      }
      svg {
        color: #7a1935;
      }
    }
  }

  .Transactions {
    .Header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
        color: #4e68aa;
      }
    }

    .Card {
      margin-top: 23px;
      background: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      padding: 15px;
      .Date{
          color: #8C8C8C;
      }
    }

    
  }
`;
