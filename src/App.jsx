import { useState } from 'react'
import './App.css'
import ConnectWalletBtn from './components/ConnectWalletBtn'


function App() {

  const [addresses, setAddresses] = useState(null)
      
  console.log(addresses)

  return (
    <div>
      <ConnectWalletBtn setAddresses={setAddresses}/>
      {addresses && (
      <div className='wallet-wrapper'>
        <div className='wallet ordinals'>
          <h4 className='address-purpose'>{addresses[0].purpose} wallet</h4>
          <p className='pubkey'><span>publicKey:</span> {addresses[0].publicKey}</p>
          <p className='address'><span>address:</span> {addresses[0].address}</p>
        </div>
        <div className='wallet payment'>
          <h4 className='address-purpose'>{addresses[1].purpose}</h4>
          <p className='pubkey'><span>publicKey:</span> {addresses[1].publicKey}</p>
          <p className='address'><span>address:</span> {addresses[1].address}</p>
        </div> 
      </div>
      )}
    </div>
  )
}

export default App
