import { type } from '@testing-library/user-event/dist/type'
import { trace } from 'console'
import styled, { createGlobalStyle } from 'styled-components'

// ============================================
// Théme : Contient le thème (couleurs etc ...)
// ============================================

export const theme = {
  colors: {
    lightGreen: '#98BB9D',
    lightGreen2: 'rgb(81, 148, 94)',
    mediumGreen: '#51945e',
    darkGreen: '#0e2a1e',
    beige: '#cbc496',
    matrixGreen: '#1b860f',
    greyGreen: '#2c4742',
    darkGreen2: '#0f221c',
    softBlack: '#1c2023',
    kaki: '#2d301f80',
    matrixGreen2: '#26453d',
  },
}

//=========================================================
// Style Globale : Style des balises HTML nue (sans classe)
//=========================================================

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin-left: 20px;
    padding: 0;
    font-family: 'GT Walsheim Pro ', sans-serif;
    background-color: ${theme.colors.softBlack};
    color: ${theme.colors.matrixGreen};
  }
  h1 {
    padding: 3px;
    color: ${theme.colors.matrixGreen}
  }
`

// ============
// Les gabarits
// ============



export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  align-items: stretch;
`
export const TitleContainer = styled.div`
  font-size: 60px;
  display: flex;
  margin-left: 20px;
`

export const FadeContainer = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 10rem;
  margin-right: 50%;
  background-color: ${theme.colors.beige};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const typewritterContainer = styled.div`
  padding: 10px;
  display: flex;
  font-size: 30px;
  color: ${theme.colors.lightGreen};
`