import { Header } from '../../components/Header'
import { Container } from './styles'
import { Form } from './styles'
import {Input } from '../../components/Input'
import {Textarea } from '../../components/Textarea'

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

                    <Textarea
                        placeholder="Observações"
                    />

                    
                </Form>

            </main>
        </Container>
    )
}