import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div` 
display: flex;
${mobile({flexDirection: "column" })}
`;



const Left = styled.div`  
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`
color: darkred;
`
const Desc = styled.p`
color: white;
margin: 20px 0px;
`
const SocialContainer = styled.div`
color: red;
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: red;
background-color: ${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    transform: scale(1.1);
    background-color: lightgrey;
}

`
const Center = styled.div`
flex: 1;  
padding: 20px;
${mobile({display: "none" })}
`;

const Title = styled.h3 `
    color: darkred;
    margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
    
`;

const ListItem = styled.li`
    color: white;
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
        color: red;
        transform: scale(1.1);
    }
`

const Right = styled.div`
flex: 1;  
padding: 20px;
${mobile({backgroundColor: "grey" })}
`;

const ContactItem = styled.div`
color: white;
transition: all 0.5 ease;
margin-bottom: 20px;
display: flex;
align-items: center;
&:hover{
    color: red;
}
`;

const Payment = styled.img` 
width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>POWER GUIDO</Logo>
            <Desc>
                A Power Guido Suplementos contém os melhores suplementos do mercado. Tanto produtos originais, quanto revendidos. É de confiança e segurança, pode confiar sempre no Power Guido.
            </Desc>
            <SocialContainer>
                <SocialIcon color="grey">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="darkgrey">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color= "grey">
                    <Facebook/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Links Úteis</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Promoções</ListItem>
                <ListItem>Proteínas</ListItem>
                <ListItem>Pré Treino</ListItem>
                <ListItem>Acessórios</ListItem>
                <ListItem>Minha Conta</ListItem>
                <ListItem>Rastreie seu pedido</ListItem>
                <ListItem>Lista de Desejos</ListItem>
                <ListItem>Lista de Desejos</ListItem>
                <ListItem>Termos de Uso</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contrato</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                Rua N.Senhora do Monte Serrat, 133 - Centro, Itariri - SP, 11760-000
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +55 13 3532-5697
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                contato@powerguido.com.br
            </ContactItem>
            <Payment src="https://cdn.awsli.com.br/2088/2088593/arquivos/payment-mobile_2021.png"/>
        </Right>
    </Container>
  )
}

export default Footer