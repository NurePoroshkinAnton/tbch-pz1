import { Block } from "./block"
import { randInt } from "./utils/random"

export abstract class Blockchain<P, B extends Block<P>> {
    public chain: B[]
    public difficultyLevel: number

    constructor(genesisBlock: B) {
        this.chain = [genesisBlock]
        this.difficultyLevel = 100
    }

    public getLatestBlock(): B {
        return this.chain[this.chain.length - 1]
    }

    abstract validatePayload(payload: P): boolean

    abstract performProofOfWork(
        randomNumber: number,
        difficultyLevel: number
    ): number

    abstract createBlock(payload: P, nonce: number): B

    public addBlock(payload: P): void {
        const isPayloadValid = this.validatePayload(payload)

        if (!isPayloadValid) {
            throw new Error("Payload is not valid")
        }

        const nonce = this.performProofOfWork(
            randInt(0, this.difficultyLevel),
            this.difficultyLevel
        )
        const block = this.createBlock(payload, nonce)
        this.chain.push(block)
    }

    public getByIndex(index: number) {
        return this.chain[index]
    }

    public isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.getByIndex(i)
            const previousBlock = this.getByIndex(i - 1)

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }

        return true
    }
}

