import { NoteItem } from '../../components/NoteItem'
import {Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import {Input } from '../../components/Input'
import { Container } from './styles'
import { Form } from './styles'
import { Link } from 'react-router-dom'

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>  
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
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