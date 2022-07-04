import React from 'react';
import { useEffect } from 'react'
import '../matrixRain/App.css'
import * as UI from '../shared/ui'
import Typewriter from 'typewriter-effect'
import MatrixRain from '../matrixRain/MatrixRain'
import {Row, Col, Container } from 'react-bootstrap';


export default function Home() {
  return (
<>
<MatrixRain />
<UI.MainContainer>
        

        <Container> 
          <Row>
    <Col>
    <UI.FadeContainer>
          <UI.TitleContainer>
            <h1>
            <Typewriter
  options={{
    strings: ['Bienvenue', 'Welcome', 'Wilkommen', 'ようこそ', 'مرحبا','欢迎', ],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
          </UI.TitleContainer>
          <UI.TextContainer>
            <h2>
              INOUBLI Adame, <br />
              Developpeur Full-Stack
            </h2>

          </UI.TextContainer>
        </UI.FadeContainer></Col>
    <Col md="auto"></Col>
    <Col xs lg="2"></Col>
    </Row> 
    </Container>
        
        

      </UI.MainContainer></>
  )
}
