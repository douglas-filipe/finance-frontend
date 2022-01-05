import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #626262;

  form input:-webkit-autofill,
  form input:-webkit-autofill:hover,
  form input:-webkit-autofill:focus,
  form textarea:-webkit-autofill,
  form textarea:-webkit-autofill:hover,
  form textarea:-webkit-autofill:focus,
  form select:-webkit-autofill,
  form select:-webkit-autofill:hover,
  form select:-webkit-autofill:focus {
    border: 0px solid #38304e;
    -webkit-text-fill-color: none;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    transition: background-color 5000s ease-in-out 0s;
    padding: 10px 10px;
    border-radius: 5px;
  }

  form {
    width: 283px;
    img {
      width: 124px;
      margin: 24px auto;
    }

    h1 {
      margin-bottom: 27px;
      font-size: 18px;
      text-align: center;
      font-weight: 500;
    }
    div:focus-within {
      box-shadow: 0px 0px 2px 1px #00a3ff;
      svg {
        color: #00a3ff;
      }
    }

    a {
      color: #1e319d;
      text-align: center;
      text-decoration: none;
      font-weight: 500;
      margin-top: 14px;
    }

    .Or {
      margin: 25px auto;
    }

    .Google {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      width: 100%;
      height: 48px;
      gap: 8px;
      cursor: pointer;

      svg {
        width: 25px;
        height: 25px;
      }
      p {
        font-size: 14px;
        color: #292929;
        font-weight: 500;
      }
    }

    .SignupLink {
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 20px;
    }

    div {
      width: 100%;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 14px;
      border-radius: 6px;
      margin-bottom: 26px;
      input {
        width: 87%;
        height: 90%;
        border: none;
        outline: none;
        font-size: 14px;
        color: #292929;
        font-weight: bold;
      }

      svg {
        width: 20px;
        height: 20px;
        color: #626262;
      }
    }

    button {
      background: #1e319d;
      height: 48px;
      width: 100%;
      color: white;
      font-size: 14px;
      font-weight: 600;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      margin-bottom: 14px;
    }
  }
`;
