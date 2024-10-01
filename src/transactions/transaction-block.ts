import { Block } from "../block"
import { Transaction } from "./transaction"

export class TransactionBlock extends Block<Transaction> {
    public static getGenesisBlock(): Block<Transaction> {
        const nullTransaction = Transaction.getNullTransaction()
        const genesisBlock = new TransactionBlock(
            "",
            Date.now(),
            nullTransaction,
            -1,
            -1
        )

        return genesisBlock
    }

    printBlock(): void {
        console.log("-----------------------------")
        console.log(`Block #${this.index}`)
        console.log(`Previous Hash: ${this.previousHash}`)
        console.log(`Nonce: ${this.nonce}`)
        console.log(`Timestamp: ${this.timestamp}`)
        console.log(`Hash: ${this.hash}`)
        console.log(`Transaction ID: ${this.payload.id}`)
        console.log(`Amount: ${this.payload.amount}`)
        console.log(`Date: ${this.payload.date.toLocaleString()}`)
        console.log(`Sender: ${this.payload.sender}`)
        console.log(`Receiver: ${this.payload.reciver}`)
        console.log("-----------------------------")
    }
}

