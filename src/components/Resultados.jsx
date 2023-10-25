import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
 color:#FFF;
 font-family: 'Lato',sans-serif;
 display: flex;
 align-items: start;
 gap: 3rem;
 margin-top: 30px;
`;

const Imagen = styled.img`
 display: block;
 width: 150px;
`

const Texto = styled.p`
font-size: 18px;
`
const Precio = styled.p`
 font-size: 30px;
 span{
    font-weight: 700;
 }
`

const Resultados = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  console.log(resultado)
  return (
    <Contenedor>
      <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt='IMAGEN CRIPTO' 
      />
      <div>
      <Precio>El precio es de: <span>{PRICE}</span> </Precio>
      <Texto>El precio mas alto del día es de: <span>{HIGHDAY}</span> </Texto>
      <Texto>El precio mas bajo del día es de: <span>{LOWDAY}</span> </Texto>
      <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </Texto>
      <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultados