import { Header } from '../../components/Header'
import { Container } from './styles'
import { Form } from './styles'
import {Input } from '../../components/Input'

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input
                        placeholder="Título"
                    />

                    
                </Form>

            </main>
        </Container>
    )
}