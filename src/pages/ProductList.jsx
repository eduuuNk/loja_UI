import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div`
    background-color: black;
`
const Title = styled.h1`
    margin: 20px;
    color: darkred;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display:"flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20;
    font-weight: 600;
    color: red;
    margin-right: 20px;
    ${mobile({marginRight: "0px" })}
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
background-color: grey;
color: white;
${mobile({margin: "10px 0px" })}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Proteínas</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filtrar Produtos:
                </FilterText>
                <Select>
                    <Option disabled selected>
                        Marca do Produto
                    </Option>
                    <Option>Power Guido</Option>
                    <Option>Outras Marcas</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                         Tipos de Proteína
                    </Option>
                    <Option>Whey</Option>
                    <Option>Albumina</Option>
                    <Option>Proteína de Soja</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Ordenar Produtos:
                </FilterText>
                <Select>
                    <Option selected>Mais Recentes</Option>
                    <Option>Preço (cres.)</Option>
                    <Option>Preço (decr.)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList