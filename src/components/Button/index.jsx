import { Container } from "./styles";

export function Button ({text},...rest){
    return(
        <Container
            type = "button"
            {...rest}
            >
            {text}
        </Container>
    )

} 