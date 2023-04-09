import { Container, Form, Background } from "./styles";
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { api } from '../../services/api'

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const verifyData = () => {
        if(!name || !email || !password){
            alert('Favor preeencher todos os campos!!')
        }

        api.post('/users', { name, email, password})
            .then(()=> alert('Usuário cadastrado com sucesso!!'))
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possivel cadastar')
                }
            });
    };

    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerencias seus links úteis</p>

                <h2>Crie sua Conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button text="Cadastrar" onClick = {verifyData} />

                <Link to="/">
                    Voltar para o Login
                </Link>
            </Form>
        </Container>
    )
}