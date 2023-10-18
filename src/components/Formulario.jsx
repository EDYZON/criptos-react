import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
 background-color: #9497FF;
 border:none;
 width: 100%;
 padding: 10px;
 color:#fff;
 font-weight:700;
 text-transform: uppercase;
 font-size: 20px;
 border-radius: 5px;
 transition: background-color .3s ease;
 margin-top: 15px;
 &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
 }
`
const Formulario = () => {
  /*const monedas = [
     {id: 'USD', nombre: 'Dolar de Estados Unidos'},
     {id: 'MXN', nombre: 'Peso Mexicano'},
     {id: 'EUR', nombre: 'Euro'},
     {id: 'GBP', nombre: 'Libra Esterlina'},
  ];*/
  const [criptos,setCriptos] =  useState([])
  const [criptomoneda , SelectCriptomoneda] = useSelectMonedas('Elige tu CriptoMoneda',criptos)
 // const [SelectCriptomonedas] = useSelectMonedas('Elige tu criptomoneda')
 useEffect(()=>{
    const consultarAPI = async () =>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
        const arrayCriptos = resultado.Data.map(cripto =>{
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }
          return objeto
        });

        setCriptos(arrayCriptos)

    }
    consultarAPI();
 },[])
  return (
    <div>
        <form>
           estado:{moneda}
            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit 
             type="submit" value="Cotizar"
            />
        </form>
    </div>
  )
}

export default Formulario