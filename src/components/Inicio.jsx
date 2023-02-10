import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
    background-image: url("https://raw.githubusercontent.com/Kc1t/LifeIsStrangePage/master/Assets/img/maxandchloe.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Top = styled.div`
    max-height: 60px;
    width: 100%;
    /* background-color: red; */
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margin-top: 1rem;
`

const NavItem = styled.div``

const Inicio = () => {
  return (
    <Container>
      <Top>
        <Left>
            {/* <img src='https://lfieisstrange.vercel.app/Assets/img/rnd/Square_Enix_logo.svg.png' style={{width: "9rem", marginTop: "1rem", marginLeft: "3rem"}}></img> */}
        </Left>
        <Right>
            <NavItem>HISTÓRIA.</NavItem>
            <NavItem>COMPARAÇÃO.</NavItem>
            <NavItem>SOUNDTRACK.</NavItem>
            <NavItem>FRANQUIA.</NavItem>
        </Right>
      </Top>
    </Container>
  )
}

export default Inicio
