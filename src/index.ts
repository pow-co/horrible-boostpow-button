(window as any).global = window;
//@ts-ignore
window.global = window

import * as onchain from './onchain'

import * as boost from './boost'

import * as pay from './anypay'


export class StagWalletRelayx {

    relayone: any;

    constructor(relayone: any) {

        this.relayone = relayone
    }

    get boost() {
        return boost
    }

    get onchain() {

        return onchain
    }

    get pay() {

        return pay
    }

}

export function wrapRelayx(relayone: any): StagWalletRelayx {

    return new StagWalletRelayx(relayone)

}

export default wrapRelayx
