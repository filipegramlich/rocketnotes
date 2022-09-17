import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input"; 
import { Link } from "react-router-dom";



export function Profile(){
    return(
        <Container>
            
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>
            <Form>
                <Avatar>

                    <img src="https://github.com/filipegramlich.png" 
                    alt="Foto de Usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        
                        <input
                        id="avatar"
                        type="file"
                        
                        />
                    </label>

                </Avatar>
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