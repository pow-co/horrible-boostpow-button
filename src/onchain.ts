
import axios from 'axios'

export async function findOrCreate(): Promise<[OnchainEvent, boolean]> {

    return [{
        txid: '',
        app: 'string',
        type: '',
        content: {},
        author: '',
        timestamp: 12345
    }, false]

}

interface FindOne {
    app: string;
    type?: string;
    content?: any;
    author?: string;
}

export async function findOne(params: FindOne): Promise<OnchainEvent | void> {

}

interface FindAll {
    app: string;
    type?: string;
    content?: any;
    author?: string;
}

export async function findAll(where: FindAll): Promise<OnchainEvent[]> {

    return []

}

export async function create({
    app, type, content, author
}: {
    app: string;
    type: string;
    content: any;
    author: boolean;
}): Promise<OnchainEvent> {

    return {
        txid: '',
        app: 'string',
        type: '',
        content: {},
        author: '',
        timestamp: 12345
    }

}

interface OnchainEvent {
    txid: string;
    app: string;
    type: string;
    content: any;
    author: string;
    timestamp: number;
}