import { Header } from '../../components/Header'
import { Container } from './styles'
import { Form } from './styles'
import {Input } from '../../components/Input'
import {Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

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
                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>
                    <Button text="Salvar"/>
                </Form>

            </main>
        </Container>
    )
}