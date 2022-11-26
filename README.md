# stag-relayx

Wrapper around relayx javascript library providing support for stag wallet high level transaction types and onchain
actions.

## Installation

Assuming your browser already has access to relayx you can wrap it using stag.

```
npm install --save stag-relayx

import { wrapRelayx } from 'stag-relayx'

const stag = wrapRelayx(relayone)

const [boostTxid, boostTxhex] = await stag.boost.buy({

  content, difficulty, value

})

const [txid, txhex] = await stag.onchain.findOrCreate({

  where: {

    app: 'powstream.com',

    type: 'add_to_favorites',

    content: {

      video_txid

    }

    author: true
  },

  defaults: {

    app: 'powstream.com'

    type: 'add_to_favorites',

    content: {

      video_txid

    },

    author: true,

  }

})

const [anypayTxid, anypayTxhex] = await stag.pay({

  url: 'https://anypayx.com/i/52101ddk',

  type: 'JsonV2'
 
})

```
