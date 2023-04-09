import { Container } from "./styles";

export function Button ({text, onClick},...rest){
    return(
        <Container
            type = "button"
            onClick={onClick}
            {...rest}
            >
            {text}
        </Container>
    )

} 