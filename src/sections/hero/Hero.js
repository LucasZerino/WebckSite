import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

class Hero extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
        
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            background-repeat: no-repeat;
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background-color: rgba(0,0,0,.5);
        `

        const Heading1 = styled.h1`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teko:wght@300&display=swap');
            font-size: 80px;
            font-family: Teko;
            line-height: 40px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 4px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 120px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            background: -webkit-linear-gradient(left, #00ffff , #007a7a);
            background: -o-linear-gradient(right, #00ffff, #007a7a);
            background: -moz-linear-gradient(right, #00ffff, #007a7a);
            background: linear-gradient(to right, #00ffff , #007a7a); 
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
           @media (min-width:768px) and (max-width:1500px) {
                font-size: 70px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            position: relative;
            z-index: 10
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 30px;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
        `

        const BottomContent = styled.div`
            position: absolute;
            width: 100%;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:767px) {
                position: relative;
                bottom: 0;
            } 
            @media (min-width:768px) and (max-width: 1023px) {    
                bottom: -25%;
            }
        `

        const ServiceCol = styled(Col)`
            padding: 0;
            border-right: #444;
            &.no-border {
                border-right: none;
            }
            @media (max-width:500px) {
                border-right:none;
            }
        `

        const Service = styled.div`
            min-height: 300px;
            background-color: #111;
            transition: .2s;
            display: flex;
            justify-content: center;
            flex-direction: column;
            &:hover {
                background-color: #222;
            }
        `
        const ServiceContent = styled.div`
            padding: 40px;
            color: #fff;
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 400;
            font-family: Teko;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
        `

        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceText = styled.p`
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
        `
        
        return (
                <Section id="home">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        <Container>
                            <Content>
                                <Heading1>
                                    WEBCK
                                </Heading1>
                                <Heading2>
                                    Digital Agency
                                </Heading2>
                                <Separator/>
                                <Type>
                                    <Typewriter
                                        options={{
                                        strings: [
                                            'Desenvolvimento de Aplicações Web e Mobile',
                                            'Soluções em Segurança e Compliance',
                                            'Desenvolvimento de Sites Institucionais',
                                            'Marketing Estratégico',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        }}
                                    />
                                </Type>
                            </Content>
                        </Container>
                    </Overlay>
                    <BottomContent>
                            <Container>
                                <Row>
                                    <ServiceCol md={4} style={{borderRight: this.state.width > 500 ? "1px solid #444" : "none"}}>
                                        <Service>
                                            <ServiceContent>
                                                <ServiceIcon>
                                                    <img src={this.props.webexpertIcon.childImageSharp.fluid.src} alt="web experts" />
                                                </ServiceIcon>
                                                <ServiceHeading>Software House</ServiceHeading>
                                                <ServiceSeparator/>
                                                <ServiceText>
                                                Inovamos desenvolvendo soluções centradas na resolução de problemas da sua empresa, focando
                                                na eXperiência de Usuário (UX/UI). Aplicações Web e Mobile, Sites Institucionais, Landing Pages
                                                e muito mais.
                                                </ServiceText>
                                            </ServiceContent>
                                        </Service>
                                    </ServiceCol>
                                    <ServiceCol md={4} style={{borderRight: this.state.width > 500 ? "1px solid #444" : "none"}}>
                                        <Service>
                                            <ServiceContent>
                                                <ServiceIcon>
                                                        <img src={this.props.mobileIcon.childImageSharp.fluid.src} alt="mobile experts" />
                                                </ServiceIcon>
                                                <ServiceHeading>Sua Empresa Online</ServiceHeading>
                                                <ServiceSeparator/>
                                                <ServiceText>
                                                Hospede a página da sua empresa, Seu Sistema de Gestão ou qualquer outra Solução. 
                                                Coloque seu processo de vendas para atuar online diminuindo assim seu custo em adquirir 
                                                um novo cliente. 
                                                Nossos consultores em Marketing Estratégico te ajudarão dando toda a assessoria e 
                                                suporte necessários.                                                 
                                                </ServiceText>
                                            </ServiceContent>
                                        </Service>
                                    </ServiceCol>
                                    <ServiceCol md={4} style={{borderRight: this.state.width > 500 ? "1px solid #444" : "none"}}>
                                        <Service>
                                            <ServiceContent>
                                                <ServiceIcon>
                                                        <img src={this.props.seoIcon.childImageSharp.fluid.src} alt="seo experts" />
                                                </ServiceIcon>
                                                <ServiceHeading>Segurança Digital e Compliance</ServiceHeading>
                                                <ServiceSeparator/>
                                                <ServiceText>
                                                Lei Geral de Proteção de Dados (LGPD), Assinatura/Aceite Eletrônico, Compliance... 
                                                O que esses tópicas se relacionam com sua empresa? Todos! A não ADEQUAÇÃO dos Contratos, Fluxos Empresariais
                                                e Sistemas geridos pela empresa podem gerar multas e processos judiciais. Temos profissionais aptos a 
                                                resolver. 
                                                </ServiceText>
                                            </ServiceContent>
                                        </Service>
                                    </ServiceCol>
                                </Row>
                            </Container>
                    </BottomContent>
                </Section>
        )
    }
}
export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/seo.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
      `}
      render={({ 
        background, 
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <Hero  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )