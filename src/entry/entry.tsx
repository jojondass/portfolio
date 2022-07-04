import { useEffect } from 'react'
import '../matrixRain/App.css';
import * as UI from '../shared/ui'
import MatrixRain from '../matrixRain/MatrixRain'

export default function Entry() {
  return (
    <UI.MainContainer>
        <h1>Entrez</h1>
      <MatrixRain />

    </UI.MainContainer>
  )
}
