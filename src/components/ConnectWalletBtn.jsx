import { getAddress } from 'sats-connect'

const ConnectWalletBtn = (props) => {

  const getAddressOptions = {
    payload: {
      purposes: ['ordinals', 'payment'],
      message: 'Address for receiving Ordinals and payments',
      network: {
        type:'Testnet'
      },
    },
    onFinish: (response) => {
      props.setAddresses(response.addresses)
    },
    onCancel: () => alert('Request canceled'),
    }

  return (
    <div style={{display: 'flex'}}>
      <button className='connect-btn' onClick={()=>getAddress(getAddressOptions)}>Connect your wallet</button>
    </div>
  )
};

export default ConnectWalletBtn;
