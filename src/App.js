import { useState, useEffect } from 'react'

const App = () => {

  const [price, setPrice] = useState("")
  const [input, setInput] = useState("btcusdt")

  const inputHolder = (event) => {
    if(event.key === "Enter"){
      setInput(event.target.value)
      event.target.value = ""
    }
  }

  const url = "https://api.binance.com/api/v3/ticker/price?symbol="
  const searchingCrypto = url + input.toUpperCase()
  const getData = async () => {
    const response = await fetch(searchingCrypto)
    const data = await response.json()
    setPrice(`${data["symbol"]} : ${data["price"]}`)
  }
  useEffect( () => {
      getData()
  })

  return <div className='search'>

      <h1>Crypto Search</h1>
      <input type="text" className="input" placeholder='Hladany symbol' onKeyDown={(event) => inputHolder(event)} />
      <h1>{price}</h1>
  </div>
}

export default App