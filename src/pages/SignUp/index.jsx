import { Container, Form, Background} from "./styles";
import { FiMail, FiLock, FiUser} from "react-icons/fi";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import { Link } from "react-router-dom";



export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerencias seus links úteis</p>

                <h2>Crie sua Conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    />

               <Button text="Cadastrar"/>

               <Link to="/">
                    Voltar para o Login
               </Link>
            </Form>
        </Container>
    )
}