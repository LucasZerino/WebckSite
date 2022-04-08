import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from '../../components/reveal-content/index'
import Counter from '../../components/counter'
import AnimationContainer from '../../components/animation-container'

class AboutOne extends React.Component {

    shouldComponentUpdate() {
      return false
    }
    
      render() {
          const Section = styled.section`
              position: relative;
              overflow: hidden;
              background-color: #050505;
              .particles {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
  
          `
  
          const AboutContainer = styled(Container)`
              padding: 250px 0 100px 0;
              @media (min-width:600px) and (max-width:768px) {
                  padding: 350px 0 100px 0;
              }
              @media (min-width:769px) and (max-width:1024px) {
                padding: 300px 0 100px 0;
              }
              @media (min-width:1025px) and (max-width:1399px) {
                padding: 400px 0 100px 0;
              }
              @media (max-width:767px) {
                  padding: 50px 50px;
              }
          `
          const Heading = styled.h1`
              font-size: 80px;
              line-height: 90px;
              font-family: Teko;
              color: #fff;
              text-transform: uppercase;
              @media (min-width:768px) and (max-width:1399px) {
                  font-size: 70px;
                  line-height: 70px;
              }
              @media (max-width:767px) {
                  font-size: 30px;
                  line-height: 30px;
                  text-align: center;
              }
          `
          const Color = styled.span`
              color: #04e5e5;
              font-size: 100px;
              line-height: 100px;
              font-family: Teko;
              text-transform: uppercase;
              letter-spacing: 2px;
              @media (min-width:768px) and (max-width:1399px) {
                  font-size: 80px;
                  line-height: 80px;
              }
              @media (max-width:767px) {
                  font-size: 40px;
                  line-height: 40px;
              }
          `
  
          const CounterComponent = styled.div`
              margin: 10px 0;
              @media (max-width:767px) {
                  margin: 50px 0;
                  text-align:center;
              }
              .value {
                  font-size: 120px;
                  font-family: Teko;
                  color: #fff;
                  line-height: 90px;
              }
              .text {
                  font-size: 20px;
                  color: #fff;
              }
              .symbol {
                  color: #04e5e5;
                  position: relative;
                  font-size: 39px;
                  top: -38px;
              }
  
          `
  
          const LeftCol = styled(Col)`
              display: flex;
              align-items: center;
          `
  
          return(
       
              <Section id="quem somos">
              <div className='particles'>  </div>
                  <AboutContainer>
                      <Row>
                          <LeftCol md={6}>
                              <RevealContent>
                                  <Heading>
                                      Renomada <Color>Software House</Color> em <Color>Natal</Color>
                                  </Heading>
                              </RevealContent>
                          </LeftCol>
                          <Col md={6}>
                              <Row>
                                  <Col md={6}>
                                      <AnimationContainer animation="fadeInLeft" delay={1000}>
                                          <CounterComponent style={{marginBottom: "100px"}}>
                                              <Counter value={5} duration={5} delay={1000} symbol="+" text="5 anos de experiência" />
                                          </CounterComponent>
                                      </AnimationContainer>
                                  </Col>
                                  <Col md={6}>
                                      <AnimationContainer animation="fadeInRight" delay={1000}>
                                          <CounterComponent style={{marginBottom: "100px"}}>
                                              <Counter value={100} duration={5} delay={1000} symbol="+" text="Clientes Satisfeitos" />
                                          </CounterComponent>
                                      </AnimationContainer>
                                  </Col>
                                  <Col md={6}>
                                      <AnimationContainer animation="fadeInLeft" delay={1000}>
                                          <CounterComponent>
                                              <Counter value={15} duration={5} delay={1000} text="Empresas Parceiras" />
                                          </CounterComponent>
                                      </AnimationContainer>
                                  </Col>
                                  <Col md={6}>
                                      <AnimationContainer animation="fadeInRight" delay={1000}>
                                          <CounterComponent>
                                              <Counter value={100} duration={5} delay={1000} symbol="+" text="Avaliações positivas" />
                                          </CounterComponent>
                                      </AnimationContainer>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </AboutContainer>
              </Section>
          )
      }
  
  }

  export default AboutOne