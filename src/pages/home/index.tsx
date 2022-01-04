import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Menu } from "../../components/menu";


export const Home = () => {
  return (
    <Container>
      <Menu/>
      <header>
        <h1>
          Bem vindo,
          <br />
          <span>Douglas!</span>
        </h1>
        <FaUserCircle />
      </header>
      <section className="total">
        <p>Saldo total:</p>
        <p>R$ 480</p>
      </section>

      <section className="Calc">
        <div className="Input">
          <div className="Icon">
            <BsArrowUp />
          </div>
          <div>
            <p>Entradas</p>
            <p>R$ 500</p>
          </div>
        </div>
        <div className="Leave">
          <div className="Icon">
            <BsArrowDown />
          </div>
          <div>
            <p>Saídas</p>
            <p>R$ 500</p>
          </div>
        </div>
      </section>

      <section className="Transactions">
        <div className="Header">
          <h1>Transações</h1>
          <p>Mostrar todas</p>
        </div>

        <div className="Card">
          <div>
            <h4>Freelance Work</h4>
            <p className="Date">29 de abril</p>
          </div>
          <p className="Value">+ R$500</p>
        </div>

        <div className="Card">
          <div>
            <h4>Freelance Work</h4>
            <p className="Date">29 de abril</p>
          </div>
          <p className="Value">+ R$500</p>
        </div>
        <div className="Card">
          <div>
            <h4>Freelance Work</h4>
            <p className="Date">29 de abril</p>
          </div>
          <p className="Value">+ R$500</p>
        </div>

        <div className="Card">
          <div>
            <h4>Freelance Work</h4>
            <p className="Date">29 de abril</p>
          </div>
          <p className="Value">+ R$500</p>
        </div>
      </section>
    </Container>
  );
};
