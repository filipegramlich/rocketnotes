import {FiPlus} from "react-icons/fi"
import {FiSearch} from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, Newnote} from "./styles"

import { Header } from "../../components/Header";

import { Input } from "../../components/Input";


import { ButtonText } from "../../components/ButtonText";


export function Home() {
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos"/>
                </li>
                <li>
                    <ButtonText title="ReactJs"/>
                </li>
                <li>
                    <ButtonText title="NodeJs"/>
                </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Content>

            </Content>

            <Newnote>
                <FiPlus/>
                Criar Nota
            </Newnote>
        </Container>

    )

};