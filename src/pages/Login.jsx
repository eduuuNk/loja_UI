import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,35,44,1) 56%, rgba(180,21,21,1) 100%);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: #545454;
${mobile({width: "75%" })}
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
color: red;
font-size: 24px;
font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
font-weight: 300;
font-size: 18px;
color: black;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: black;
color: red;
cursor: pointer;
transition: all 0.5s ease;
margin-bottom: 10px;
&:hover{
    background-color: white;
    transform: scale(1.05);
}
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>ENTRAR</Title>
            <Form>
                <Input placeholder="Usuário"/>
                <Input placeholder="Senha"/>
                <Button>ENTRAR</Button>
                <Link>Esqueceu a senha?</Link>
                <Link>Ainda não tem uma conta? Cadastre-se</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login