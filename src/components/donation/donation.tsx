import { useEffect, useState } from 'react'
import {QRCodeSVG} from 'qrcode.react';
import { bech32 } from 'bech32';
import './donation.scss';

interface Props {
  className?: string;
}

function stringToHex(text: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(text);
}

const Donation: React.FC<Props> = ({className}) => {

  const [lnUrl, setLnUrl] = useState<string>();

  const init = async () => {
    const words = bech32.toWords(stringToHex('https://getalby.com/.well-known/lnurlp/btcgrove'))
    const encoded = bech32.encode('lnurl', words, 165)
    console.log('LNURL', encoded.toUpperCase())
    setLnUrl(encoded.toUpperCase())
  }

  useEffect(() => {
    init()
  })

  return (
    <div className={`donation ${className}`}>
      <h3 className="donation__title">Support Bitcoin Grove</h3>
      <p className="donation__desc">
        As a grassroots organization, we rely on the support of our community. Your donations help us maintain our space, host events, and foster the growth of the Bitcoin community in Miami. Every contribution, big or small, makes a difference.
      </p>
      <div className="donation__lnurl">
        {lnUrl && <QRCodeSVG 
        level={"M"}
        fgColor="#000000"
        bgColor="#7cc4c0"
        width={250}
        height={250}
        value={lnUrl}
        imageSettings={{
          src: '/images/bitcoingrovelogo.png',
          height: 30,
          width: 30,
          excavate: true,
        }} />}
      </div>
      <button className="donation__button">Donate</button>
    </div>
  )
}

export default Donation;