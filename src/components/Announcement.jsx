import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: darkred;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight:500;
`

const Announcement = () => {
  return (
    <Container>
        Suplementos Para Levantar Seu Astral!
    </Container>
  )
}

export default Announcement