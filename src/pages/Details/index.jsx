import { Header } from "../../components/Header";

import { Button } from "../../components/Button";

import { Container, Content } from "./styles";

import { Section } from "../../components/Section";

import { Links } from "../../components/Section/styles";

import { Tags } from "../../components/Tags";

import { ButtonText } from "../../components/ButtonText";

export function Details (){
  return (
    <Container>
      <Header/>
        <main>
          <Content>
          
          <ButtonText title="Excluir Nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iusto ipsa accusantium sequi magni quasi, rem ab veniam eaque veritatis. Obcaecati illum eaque fuga quas sequi sunt nihil ipsam officiis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptate vel cupiditate. Veritatis dolorem, assumenda labore perspiciatis officia debitis esse, mollitia accusantium incidunt, eaque eveniet pariatur aliquam inventore temporibus rem!</p>

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
          </Content>
        </main> 
    </Container>
  )

};