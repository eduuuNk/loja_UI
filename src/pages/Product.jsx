import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`
    background-color: black;
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh" })}
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px" })}
`

const Title = styled.h1`
color: darkred;
font-weight: 200;
`

const Desc = styled.p`
color: white;
margin: 20px 0px;
`

const Price = styled.span`
color: red;
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
${mobile({width: "100%" })}
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
color: red;
font-size: 20px;
font-weight: 200;
`
const FilterImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin: 0px 5px;
cursor: pointer;
transition: all 0.2s ease;
&:hover{
    transform: scale(1.1);
}
`
const FilterSize = styled.select`
background-color: #696969;
color: white;
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
color: white;
${mobile({width: "100%" })}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius; 10;
border: 1px solid red;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`   
const Button = styled.button`
    padding: 15px;
    border: 2px solid red;
    font-weight: 700;
    cursor: pointer;
    background-color: black;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: white;
        color: red;
        transform: scale(1.1);
    }
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://live.staticflickr.com/65535/52532055207_ecf9386ff1.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>WHEY POWER GUIDO</Title>
                <Desc>Whey Protein original da Power Guido. Fabricado com os melhores ingredientes em Itariri - SP, seguindo todos os protocolos de higiene e segurança. Feito com banana, ovo e leite, o Whey Protein Power Guido oferece diversos sabores, além do melhor custo-benefício do mercado.</Desc>
                <Price>R$50,00</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Sabor:</FilterTitle>
                        <FilterImg src="https://w7.pngwing.com/pngs/523/772/png-transparent-chocolate-bar-chocolate-food-desktop-wallpaper-chocolate-bar.png"/>
                        <FilterImg src="https://i.pinimg.com/originals/de/65/12/de65127059642665421609f45ac36f9e.png"/>
                        <FilterImg src="https://w7.pngwing.com/pngs/448/258/png-transparent-vanilla-graphy-vanilla-pod-photography-flower-flowers-thumbnail.png"/>
                        <FilterImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukGNZLpVVthVSmPvAGdgUctkodPlfQU-OJqEo2As&s"/>
                        <FilterImg src="https://img1.gratispng.com/20181115/hwx/kisspng-spare-rib-express-food-discounts-and-allowances-5bed4f11357c90.7035732715422789292191.jpg"/>
                        <FilterImg src="https://i.pinimg.com/736x/d4/2d/20/d42d208b00c45fe4b73b77acf18b85b2.jpg"/>
                    </Filter>
                    <Filter>

                        <FilterTitle>Tamanho:</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>450G</FilterSizeOption>
                            <FilterSizeOption>1KG</FilterSizeOption>
                            <FilterSizeOption>2KG</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADICIONAR AO CARRINHO</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product