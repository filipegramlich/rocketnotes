import { Container, Form, Background} from "./styles";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import { FiMail, FiLock, FiUser} from "react-icons/fi"


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

               <a href="#">
                    Voltar para o Login
               </a>
            </Form>
        </Container>
    )
}