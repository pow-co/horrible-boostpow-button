

export interface PaymentRequestOutput {
    amount: number;
    script: string;
}

export interface PaymentRequest {
    creationTimestamp: number;
    expirationTimestamp: number;
    memo: string;
    merchantData: string;
    network: string;
    outputs: PaymentRequestOutput[];
    paymentUrl: string;
}

export  default function(relayone: any) {

}

export async function bip270() {

}

export async function json() {

}

export async function anypay() {
    
}
