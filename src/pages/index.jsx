import { Header } from "../components/Header"

import { Button } from "../components/Button"

import { Container } from "./styles"

import { Section } from "../components/Section"

import { Links } from "../components/Section/styles"

import { Tags } from "../components/Tags"

import { ButtonText } from "../components/ButtonText"

export function Details(){

  return(
    <Container>
      <Header/>
      <ButtonText title="Excluir Nota"/>
      <Section title="Links Úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">

        <Tags title="ReactJs"/>
        <Tags title="NodeJs"/>
          
      </Section>
      <Button text = "Voltar"/>      
    </Container>
  )

}