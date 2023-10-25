import React from 'react'
import styled from '@emotion/styled'

const Resultados = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  console.log(resultado)
  return (
    <div>
      <p>El precio es de: <span>{PRICE}</span> </p>
      <p>El precio mas alto del día es de: <span>{HIGHDAY}</span> </p>
      <p>El precio mas bajo del día es de: <span>{LOWDAY}</span> </p>
      <p>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </p>
      <p>Ultima actualización: <span>{LASTUPDATE}</span> </p>
    </div>
  )
}

export default Resultados