import { Container, Brand, Menu, Search, Content, Newnote} from "./styles"
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import {Section}from "../../components/Section";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import {FiSearch} from "react-icons/fi"
import {FiPlus} from "react-icons/fi"
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
                <Section title="Minhas notas">
                    <Note 
                        data={{title:"React",tags:[
                                {id:"1", name:"react"},
                                {id:"2", name:"nodejs"},
                            ]
                        }
                    }/>
                </Section>
            </Content>

            <Newnote to="/new">
                <FiPlus/>
                Criar Nota
            </Newnote>
        </Container>

    )

};