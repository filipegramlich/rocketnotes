import {RiShutDownLine} from "react-icons/ri";
import { Container, Profile, Logout} from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/filipegramlich.png" alt="User Image" />
                <div>
                    <span>Bem vindo</span>
                    <strong>Filipe Gramlich</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
};