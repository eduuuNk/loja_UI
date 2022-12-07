import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: rgb(179,19,19);
background: radial-gradient(circle, rgba(179,19,19,1) 0%, rgba(10,10,10,1) 53%);
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
`
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: #545454;
${mobile({width: "75%" })}
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Title = styled.h1`
color: red;
font-size: 24px;
font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
font-weight: 300;
font-size: 18px;
color: black;
`
const Agreement = styled.span`
color: white;
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: black;
color: red;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
    background-color: white;
    transform: scale(1.05);
}
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CADASTRAR-SE</Title>
            <Form>
                <Input placeholder="Nome"/>
                <Input placeholder="Sobrenome"/>
                <Input placeholder="Usuário"/>
                <Input placeholder="Email"/>
                <Input placeholder="Senha"/>
                <Input placeholder="Confirmar Senha"/>
                <Agreement>Criando uma conta, eu CONCORDO e ACEITO os <b>TERMOS DE USO E PRIVACIDADE</b></Agreement>
                <Button>CRIAR</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register