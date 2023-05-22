import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from '../../hooks/auth';
import { Container, Logout, Profile } from "./styles";

export function Header(){

    const { signOut } = useAuth()

    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/filipegramlich.png" alt="User Image" />
                <div>
                    <span>Bem vindo</span>
                    <strong>Filipe Gramlich</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
};