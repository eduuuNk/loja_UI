import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`
background-color: black;
`

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px" })}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
color: darkred;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`
const TopTexts = styled.div`
${mobile({display: "none" })}
`
const TopText = styled.span`
    color: white;
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    &:hover{
        color: red;
    }
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "red"};
    background-color: ${props=>
        props.type === "filled" ? "black" : "white"};
    color: ${props=>props.type === "filled" && "red"};
    transition: all 0.4s ease;
    &:hover{
        transform: scale(1.1)
    }
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
color: white;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.img`
width: 20px;
height: 20px;
border-radius: 50%;


`
const ProductSize = styled.span`
`
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
`
const ProductAmmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
color: white;
`
const ProductAmmount = styled.div`
font-size: 24px;
margin: 5px;
color: white;
${mobile({margin: "5px 15px" })}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
color: white;
${mobile({marginBottom: "20px" })}
`
const Hr = styled.hr`
background-color: red;
border: none;
height: 1px;
`
const Summary = styled.div`
flex: 1;
border:0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
color: white;
height: 50vh;
align-items: center;
`
const SummaryTitle = styled.h1`  
color: darkred;
font-weight: 200;
`
const SummaryItem = styled.div`  
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px;"};
`
const SummaryItemText = styled.span`  
display: flex;
`
const SummaryItemPrice = styled.span`  
`
const Button = styled.button`
display: flex;
align-items: center;
width: 100px;
padding: 10px;
background-color: black;
color: red;
font-weight: 600;
cursor: pointer;
border: 2px solid red;
transition: all 0.5s ease;
&:hover{
    background-color: white;
    transform: scale(1.1);
    border: none;
}
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>SEU CARRINHO</Title>
            <Top>

                <TopButton>CONTINUE COMPRANDO</TopButton>
                <TopTexts>
                    <TopText>Seu Carrinho(2)</TopText>
                    <TopText>Sua Lista de Desejos(0)</TopText>
                    
                </TopTexts>
                <TopButton type="filled">FINALIZAR A COMPRA</TopButton>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>

                            <Image src="https://live.staticflickr.com/65535/52532055207_ecf9386ff1.jpg"/>
                            <Details>
                                <ProductName><b>Produto:</b> WHEY POWER GUIDO</ProductName>
                                <ProductId><b>ID:</b> 59247580275</ProductId>
                                <ProductColor src="https://i.pinimg.com/736x/d4/2d/20/d42d208b00c45fe4b73b77acf18b85b2.jpg"></ProductColor>
                                <ProductSize><b>Tamanho:</b>1KG</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmmountContainer>
                                <Add/>
                                <ProductAmmount>2</ProductAmmount>
                                <Remove/>
                            </ProductAmmountContainer>
                            <ProductPrice>R$60,00</ProductPrice>
                        </PriceDetail>
                    </Product>
                <Hr/>
                <Product>
                        <ProductDetail>

                            <Image src="https://www.oficialfarma.com.br/media/catalog/product/8/5/8502.png?width=85&height=85&canvas=85,85&optimize=medium&bg-color=255,255,255&fit=bounds"/>
                            <Details>
                                <ProductName><b>Produto:</b> VASODILATADOR</ProductName>
                                <ProductId><b>ID:</b> 3847165096</ProductId>
                                <ProductColor src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX3AAD////c3Nza2trb29vg4OD7+/vu7u7q6urx8fH4+Pjn5+f09PTk5OTb4ODa5OT1Kyvd19fgysr/6ur/+fn1Ly/9rKz/5ub/7+/vbGzhwsLe0tL/39/qi4vmpKT/zc37jY3zSUnlrKzxWlromZnktrb+1NTsf3/7ZGTqkpLwZ2f8oaH5RETivr7+xsb9v7/7e3v8kpL2ISH3FRXud3f0PT37cHD7h4fxUVH5ODjr19f9qqr4Jibon5/8tbXrjo7y09O1tcuaAAASGUlEQVR4nO2de1fiPBPAaUWQi4kgKgIiuOIdb7i67qL7fP9P9fZC20nJJJM0ZX3Pcf7yGJLOr9eZyWRS8VeyVfOA+ECqsMHbAi3bsKEJWqot2NKALXXYslPNWrbasGUXthRSrfJN+E34TfhN+E34Tagn3EpEHGYLiDgMkBwhkBxhoC5bicCxA/uIhLBFUK1qqFqllsjuNpAalG2spQkbWrClnf6bcd7wmv3R6cPnn9unyeTt8vLk+nx8Nu92tnkz0CDtswNHa8PRCqlWSVm34X0hnJtq1lL1YUMN3n67sKW9FV41zv3B+ORmuleRy8GPt8PTftKnBRVowtEKqQYIfXQYeOvTCJuMV+fXNxiaKL8mD/tBnx2ogEhYRLVyCHv3lz9JcJlc/Rkwzv4/CEe3U0O6RG7GwxXkFya8mDxb4sUyvY4gvyrh0VMxvBXkR5WzL0jItz/vHODFcjMTPoFfgJDxwbEzvEjeD78SIeNntu8WlUz6xVVzQsj4+L0EvlAe978AIWNjF28XTF6PItVwm8aIkGTRisME9yfNbLGXx76daum/U+/JR99eYk/YwEfuXp+4XIpQNNX0/iG4/JgTxjs3G+AL5dNUNb/qwANm7HpDfIHcjUxUo11D3TB8frA5wEDeNkzI2OVG+QJZXGySkA+WmwaspJdxE4T85B/wBbIcbYaQDTfxiZDL7SYI+eyf8QVyVSuf8B/doYksjnjJhFf/FjCQMUdUc0LYt/0I7k1vLv9+nJ3NZqcXp/cPh7eT1+nCcqxLrieENk11JXmrDUj635GFPj8fD++7gYvFVzHvRnaQ3tHZ5S8Lzh/MX1MtIgQ6A8L0r23Qng+7RsLPTFX5dTLrBGjCVEU91SM41WEgf//hzdS/nOZVi8eDh6mlhyHFvKP/8XMjLZ4vZ35w3cI7ZkckBIdJLmj/0+z5XvYF1VYiEib/JXvARp/558k8pvPXCeGJBLesd28Cudh3TsgNDNHHC8FXIxJ69c65QaD8yDEhHXB52PPimRlTwpZZyG7fKSEZcHoad7EiDGcZeYf8NBw5JKQ+g9PEw7EmDIT5f4mI+84IOc2bvzvNuhQgDBlpZ3TRd0U4Jh3uDHYpRBg89sMXyjH3BNvLnvCCcrATJkzdFyQMzLF9Shh9ynwgtoRHlCN1ub82y12EMJxd+yQc+Af0NLSEcpumRwhpn3MmmcdHCGU2jZTQ6xFsgMwMN5vHB+Fh/c0yHUZHEQnhYCIhbMl9D8FZiecPH/SImTMl5L7U0tOlyafh+if+dtVFlU8DRMwY0uTTsKH+BB+lfZB8mvS+kPmH7EN7gDRWW0ZOFOvo7bhFRghuAiIhG+iGv+ulXUogZB3KvM9VEUJdWPQRdHFPyKq0ia3kOTEn5Doz+Bx2cU7IOtSYyciSkOl8+jEvk5B2i0aytCTsaMad8TKzLw0Ak4C/KSH/oR51zkrNL90ymly+sCBkGnt7wErNoN02mz1/tiDU3KNz5pdJ2DMNzL4ZE2reoxFgeYTGgNH71IiQzZXDnUXGYNWCMG+1yQktQut3YUQ4UwAQptnCTZhEzJVB2g8ed9mVJz4HsgNbGrClDlvkic89qwykTw8Olqkmz6dhSt/sKelSg7ZuznsCkvOegIi+Rfy/asdygllw20E+TUYI7uKqaqQrMAzo4sgDNvoOCnIpEiYHkRIqg4d7smGcEVJtUZn0wWAawqFqnP0yCem2qESgH6AmVLq9D9JhHBHa36KRZM6whlD1sb+BOrkmpACq0gheiYSqS7gwWFFiTOgTALtcFbvJnkQloeopnLHyCHe29M9gl22pUgmyJ1FFqHqRHvMSr+Eu4Qoyf8vrKX6QXkTlNVQMUKWuCrIgJNiiXRaFchXmyIRAyBST2WesPMIaDTAKVitCjErCeLqf4ffKlKPpAIHkCEHaQ85qAy0ZYU1vi3ZZkkSxj/8oWcQAMhWaibR2Q2kp3sbd8AdNIO1dIC3Y0oAtddhSl7YQbtHfsYKhAh7+tn+v5VVbi3m/op3jF5U8sOwVinlTjO3UlKoGv1e87mdME/NWvKji91QJ64AptmhmK4Y9FJPSNzynWp7wEO268pncE1JsUWAMr94fqORVyxPi8wS9kggpphr0GqJhGD7X/5ELsOQI8enQxO11TUgB3Id9fM1FnHIl4RPaMZmCcUxIeQa7sEsypYI/iUMlIXq41OJzS+gTnsEuk0384Q7QuRjoFAnx9Mp0mtApYZ3iTTDp1CYe7oxuU4zwFu2VdnBK2KIZ29LJWzzeOVQQogZftvLIJSHRFpWnL3P0tT9mKCH+uc8O4JCQEBeNjW0pIe4ihB99JAsadZ9BjEeeahwRApM6X/kja8kISe5SohogTFKC0XfNggkx71Yi7XbtEetz2mwn0gKy0wbSQFvqsKW++mezQTC2dxLVgGQjoc7+fztAARjz5lhy0IKlJVOQhZrGMW9KTCb90CNrSO+xjodYzBu12F9AbpVICB4wIw+YVU1sUSwhDev5injA+JzoDCTIOSE0tEUxQuw2XSCEeBQRZgC6IDS1RTFCNGCzjxBiHxhCAqARIQXwCPbBCPtY7wckEoX9/tztNaT4g11aXQxsoImcEE3xGoADFCckRbaJtU3ekP6/pIRolt6CkIhrQEgztmmEqIkiJURj3VfwMSxOSDO2aYRoWLEvJfyF/PrW5TUk2qLUGkPYyrdTT0aIRfROHRISQ/dkQuyqHMoI0VdpHy5GRGPeeatNGvOmG9siIRxNIMSerLfMQ6g0VtL+jR2zvQOlAQU21GFDXdbSphjbdcloqAJt7Jv/o5n+Po15M2xZxVTIsSwQ8zYytvG6ibCko4+FXQ4ypVMPGE2hOc4RgmfCyAM2M9VotS991GeX+PgMi9GcCNO+1oSGtiiREH2ZdtYJOWYfjJ0Qmhrb1PqlWGQpi7FmhNik08wFIcUWFYxtKiGm9VxCiH1ausIHwo6QcgW7wgeCSojdedlKuowQ852GxQlpxrZVlV3s7TGWEGJKVAsTtmnGthUhNhuYLZTICLEwFC9eKZlmbFsRYt7F9Tohww5emJCaRmJFiMXbTuiEz0UJyca2FeEpMmSWbJrGvDHDe8lzVe6AEUyJedON7dx6CzBazmrLGrbQJbyAsL6SBvLTg3a9kOj9wd8N+9Eb2DV8S9XOvCeMMDS2s7Nm5j1RPhNZtWs4GtF7Ylj6z4Sl3pOOcGlV7bptYWwr6nmD45MJkw5awoU9oaEtakWIra97khBiVro1oWGejFvCWwkhdr5tCY3TSKwIsWnSPxJC7KXXsyMkGdvCB8KKEMsc+pQQYp4WqbzGGqFPyZNh6ooDFEIsFPUgIcSmqkZWOweQ8mQ0NRUIhBwrEnshIcTm1u5tCInGdnFC7M4bpR0yQiyN6tBmbwSisV38LsXC2H0JIfZWmpgTko3twoToErRmVhcj/TH2ZbmilJQWMhVIOdtRH9nqvFhyVps0UyGQLjL+XqZ0JQ1M/4f9WIhy4/HnJMxdbxE+9G1FaHy9BY+zY+7hNPt9ljGEThl3hLOm856MIts7cDSq95Q1VNkf5Ag3kpj3Fmq2zeH4Og/YzJIput8Tx3KcTqSE2ItXqH6hITTLkylOiD3xIIwNCLHzcUwnNM3ZLkqIprYNZLmJHnZPH5AJKYC/YZ+ChKh3WJFmX+JVy3rwAApCkrEtLsgrSIhZKXtcml+KzlTd0wirhGewy1zuLIfORNzICdGX6Rs8AE5Iimy73TsPO841kxNi8zjCg4gS9vRrlwJTzSUh/hjOEUJ0RRB8/WGExJxtp4RoqmEVyfNG1yLAnYkQQpIt6rslRKdafnJsh0dMtykklGYqkLyJqI9RRTplpoKPrke4ZHB1XpoPvdOqY6+mNOEaybne2SXM8DYVSd8rBYA00Jb0v7UJdqz7JkgHh6tk8X1V/qYRZFnM2yfUdEpNNWSVrKeMeQNjG3hPaM3KHlLP2/fR/MuDLHlPJIweeKO4KL26JyAEz35GiFooUw/Jgg50RUvAz9PAzhqhYVzUHSG6duIWJ8RXSx2nFzFPaBr4dUaIL/AZKa4hXmWvgxAaG9vOCNGv93Ny8iWEitpC18ltKhJS/MGuuCDPFSFqQk1UhGiAtbJIblOBsEqyRS3rCKsJsanRVf09jFBxm46ZhJBmbJdCiC4kfPZUhIoFxO98nZBobJdBiJfgflITKkrtnbE1QpotWgohXvzjSE2oWHu6lyekRrbLIMSfwjsPJ4zMWTT5K1zKH7RnyTV0Y9usIh0p5o1vqvWZEKYx77QGSDuqCVLDy0Ysoh8kP98mGNs1VTmTtZYGbGnBljZsCcuoKKrjbucrraztFaQo/RFVJI4tWmZibCOrZD1lzBsa2/nNJ3HrMjC+4j6q2pdYxmYl9vXJke0sMGBfzzunWkyorGSVrNFSESp2CrhaERraoo4JGTbhVEmKYmgI0XUolSiuaGFsOyZE530r6SdNQ6jaz6IXEFJsUcHYdkuo2nfqXbKNgKwGreIcvXq0yLbwgXBLqCqYN07dWDWh6iI+cJIt6mjnABmhYn/JZRaK0NQRVm1S2SXli5ZHiBYnqcBLqCMk7SyjAHS2+8O6aqrt+w7AMkJdLWjF65QCWB6hqmZi9iIlENpsdAgAyyNUPT9TuJoXiXlnYr3j9srYdrQLS141NLwWyohJw/GVtO71LiyHjSZmaGTf0xX3rsOWhr64N1BNvXfYDYddmulI0t2QqviUt1pSWxSuA857T6CF6h9GLVy9l0HHdEcrm5LFmanmYkcrQBj+C58tjOQaKx6LElp8MYAt6p5QU+n/HS2tiu9KpnyqNYDuCXXbFs0tCNFpfUQEY9s1oeYKxpuTGRPi0R6ZdJ3unZcj1G0Gvoy+9caERvdplznfOy8T7U7EA0tCfGpAAuhqbwQZoW5vtJPYmrEgJBtvXYPdAc0J8YKcsdxJwvHUHR5VrooIWCKhdhfEoW9PSNssPja2SyLc1z4qM/nEn4RwLbAciv5RfB7GFq+rXVjEmLd+j8cTvuqCpKCn3lNVWntKFblbyWK140UTXAI/t1odSK5CKxDRt4iO7ut9HLAnDBxMv99Toq52e7lAXqP0TKvdkJT+IZ/pjQ6YcwcVoO5h6RP3VL8nExrsnVel7NGtT7nTEup3QQzlqu+aUPuVj2QE+9gS+pz0Qr1tgihJccL/KBseg+oXhQh9ZXQklcUHSxmLEvZpBuM5pTgQgbBKmc4OZe+MMxeEPZ0Rs5ITUjEEGiEhJSGSg3HMWISQyhd6TO4IvR41qLG47vAiEeER2aEJXUKHhOSrGMjxnDOLmZlwo+oH0vslBXRKSCkHmMreX+PZNcbZqYk/GjtMTgnV8eY1ufuThW20Nk2AN3sxCppcc0G1NUJo0+iXwKXDkL6Lmey93fdXhGimgs8CusG5ZtvaNRnznGoxIdAZEKZ/IanGgSQJ0CTrRpSD4/N5R/Agoizo8LoFbLzdP729Mox4VVa5eVC1WD94GGkWNHyviYTJv0k26rosryaH96N+vHyqzQOpDruz8ckx/b0C5flIolooImHyX40HnBuGZizislgeHCzRBHSaTHtS1RwRBv6i5SahzuQFU80Roc9M3zeO5YOjqjkiDIaxm5ZyIssBU6rmiNAb/as79ZgxjWqOCC1mbZxItJP0hgi9U/OPWFH50WEk1RwRbv4yjjlZNUeE3kWhjW0N5bjDDFTDCPU2TWDRwmE29lJ9n3ND1bTX0EcdDWHpb986KcVIPjkzVi0LDyP5NLCkdK5uopC0MiqSPUWTyyqzUi0RA/9wNQxoCIe5MHIbjeVlyG1Us/OAsWEu7FwEEl+HF1LNEWHAWM69ejnkhVVzROh5R4oMfzvZO/e5E9UcEXpe79Dl9/F1lgXQvwqhV+MDxabsJvLzsOe1wGG+CmFzi3F2VvgLefAUBSmodYQ3S+iHcUH/7NjeKp/eJtNlX5YwgmSDa9PwYCDPjw8gAvOVCSPKujc6fKRfy58v4yEXFCifEKTTUgLLnnSWu3dx+DZVcy5/XX4MfM4NarIbqlZJs4WbMIkYJiRv17CWXdggS3yODtH/7+z85OVq+r6XwD7v/fx1/Hb7efE7YONMlvjcgqMVUk2XTxOdGyDCWSPu8CgE8htRsDuU4A+xBq0sn8ZANSyfJhsG3MXGbmaZWV8FVfsm/Cb8Jvwm/Cb8JtSr9j9sUNhNTB9hCgAAAABJRU5ErkJggg=="></ProductColor>
                                <ProductSize><b>Tamanho:</b>60 cápsulas</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmmountContainer>
                                <Add/>
                                <ProductAmmount>2</ProductAmmount>
                                <Remove/>
                            </ProductAmmountContainer>
                            <ProductPrice>R$40,00</ProductPrice>
                        </PriceDetail>
                    </Product> 
                    </Info>
                <Summary>
                    <SummaryTitle>DETALHES DO PEDIDO</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>R$100,00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Frete</SummaryItemText>
                        <SummaryItemPrice>R$13,60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Desconto do Frete</SummaryItemText>
                        <SummaryItemPrice>R$ -13,60</SummaryItemPrice>
                        <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>R$100,00</SummaryItemPrice>
                    </SummaryItem>
                    </SummaryItem>
                    <Button>FINALIZAR COMPRA</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart