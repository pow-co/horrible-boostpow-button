
import * as onchain from './onchain'

import boostpow from './boost'

import * as pay from './anypay'

import * as nimble from '@runonbitcoin/nimble'

export class StagWalletRelayx {

    relayone: any;

    constructor(relayone: any) {

        this.relayone = relayone
    }

    get boost(): any {

        return boostpow(this.relayone)
    }

    get onchain() {

        return onchain
    }

    get pay() {

        return pay
    }

    get nimble() {

        return nimble
    }

}

export function wrapRelayx(relayone: any): StagWalletRelayx {

    return new StagWalletRelayx(relayone)

}

export default wrapRelayx
