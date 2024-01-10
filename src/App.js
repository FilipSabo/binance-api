import { useState, useEffect } from 'react'

const App = () => {

  const [price, setPrice] = useState("")
  const [input, setInput] = useState("btcusdt")
  // const [error, setError] = useState(false)

  const inputHolder = (event) => {
    if(event.key === "Enter"){
      setInput(event.target.value)
      event.target.value = ""
    }
  }

  const url = "https://api.binance.com/api/v3/ticker/price?symbol="
  const searchingCrypto = url + input.toUpperCase()
  const getFetch = () => {
    fetch(searchingCrypto)
    .then (res => {
      return res.json()
    })
    .then (data => {
      setPrice(`${data["symbol"]} : ${data["price"]}`)
    })
    .catch ( err => {
      if (err.message === "Failed to fetch"){
        setPrice("Zla hodnota, prosim zadat znova")
      }
    })
  }
  useEffect( () => {
      getFetch()
  })

  return <section>
    <div className='search'>
        <h1>Crypto Search</h1>
        <input type="text" className="input" placeholder='Hladany symbol' onKeyDown={(event) => inputHolder(event)} />
        <h1>{price}</h1>
  </div>
</section>
}

export default App