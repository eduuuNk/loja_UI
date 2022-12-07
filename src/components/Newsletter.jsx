import Send from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
height: 60vh;
background-color: #6a6a6a;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
color: darkred;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
color: white;
${mobile({textAlign: "center" })}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #4F4F4F;
display: flex;
justify-content: space-between;
border: 1px solid black;
${mobile({width: "80%" })}
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: black;
color: darkred;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`;


const Newsletter = () => {
  return (
    <Container>
        <Title>FIQUE POR DENTRO</Title>
        <Desc>Receba emails para ficar por dentro das promoções e estoque</Desc>
        <InputContainer>
            <Input placeholder='Seu Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter