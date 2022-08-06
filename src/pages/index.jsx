import { Header } from "../components/Header"

import { Button } from "../components/Button"

import { Container } from "./styles"

import { Section } from "../components/Section"

import { Links } from "../components/Section/styles"

export function Details(){

  return(
    <Container>
      <Header/>
      <Section title="Links Úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Button text = "Voltar"/>      
    </Container>
  )

}