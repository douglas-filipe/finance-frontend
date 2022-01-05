import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo.svg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export interface DataForm {
  email: string;
  password?: string;
  name?: string;
}

export const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(" Email inválido!")
      .required(" *Campo obrigatório"),
    password: yup.string().required(" *Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {};
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="Logotipo" />
        <h1>Entre em sua conta</h1>
        <div>
          <MdEmail />
          <input id="email" placeholder="Email" {...register("email")} />
        </div>
        <div>
          <RiLockPasswordFill />
          <input id="password" placeholder="Senha" {...register("password")} />
        </div>
        <button>Entrar</button>
        <Link to="/recuperate">Esqueceu sua senha?</Link>
        <p className="Or">- Ou -</p>
        <div className="Google">
          <FcGoogle />
          <p>Entrar com google</p>
        </div>
        <p className="SignupLink">Não possui uma conta?<Link to="/signup"> Cadastre-se</Link></p>
      </form>
    </Container>
  );
};
