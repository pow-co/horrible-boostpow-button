# boostpow-button

Simple react component for buying boostpow for your app's content

```
npm install --save boostpow-button
```

## Usage

```
import BoostpowButton from 'boostpow-button'

export default function() {

  return (
 
   <div>

      <h1>Boost My Cat Gif<h1>

      <BoostpowButton
        content={content_txid}
        currency={'USD'}
        value={0.05}
        onSuccess={onBoostSuccess}
        onError={onBoostError}
        onClick={onClick}
      />

    </div>
  )

}

function onSuccess(result) {
  alert('boostpow success!')
}

async function onClick(whenDone: Promise) {
  const boostpowJobResult = await whenDone

  // onClick provides a Promise object that resolves once the job transaction
  // has been successfully posted to the bitcoin network
}

```

