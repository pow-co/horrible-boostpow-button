
import axios from 'axios'

import * as boostpow from 'boostpow'

export interface BuyBoost {
    content: string;
    difficulty: number;
    currency: string;
    value: number;
    tag?: Buffer;
    category?: Buffer;
}

export interface BuyBoostResult {
    txid: string;
    txhex: string;
    job: boostpow.BoostPowJob
}

import { PaymentRequest } from './anypay'

export async function buy(buyBoost: BuyBoost): Promise<BuyBoostResult> {

    const { content, difficulty } = buyBoost

    const { data } = await axios.get(`https://pow.co/api/v1/boostpow/${content}/new?difficulty=${difficulty}`)

    const paymentRequest: PaymentRequest = data

    const result = {
        txid: '',
        txhex: '',
        paymentRequest: paymentRequest,
        job: data
    }

    return result

}
