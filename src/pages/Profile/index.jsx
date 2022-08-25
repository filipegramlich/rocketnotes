import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <Container>
            
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/filipegramlich.png" 
                    alt="Foto de Usuário" />
                </Avatar>
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input
                    id="avatar"
                    type="file"
                    
                    />
                </label>
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
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha "
                    type="password"
                    icon={FiLock}
                />

                <Button text="Salvar"/>
            </Form>

        </Container>
    )
} ;