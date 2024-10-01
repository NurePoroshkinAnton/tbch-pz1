import { Blockchain } from "../blockchain"
import { Transaction } from "./transaction"
import { TransactionBlock } from "./transaction-block"

export class TransactionBlockchain extends Blockchain<
    Transaction,
    TransactionBlock
> {
    constructor() {
        const genesisBlock = TransactionBlock.getGenesisBlock()
        super(genesisBlock)
    }

    validatePayload(payload: Transaction): boolean {
        return payload.amount > 0
    }

    performProofOfWork(randomNumber: number, difficultyLevel: number): number {
        let nonce = 0

        for (; nonce < difficultyLevel; nonce++) {
            if (nonce === randomNumber) {
                break
            }
        }

        return nonce
    }

    createBlock(payload: Transaction, nonce: number): TransactionBlock {
        return new TransactionBlock(
            this.getLatestBlock().hash,
            Date.now(),
            payload,
            this.chain.length,
            nonce
        )
    }

    public printBlockchain(): void {
        this.chain.forEach((block) => {
            block.printBlock()
        })
    }
}

