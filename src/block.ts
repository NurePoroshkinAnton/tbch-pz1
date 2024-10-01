import * as crypto from "crypto"

export abstract class Block<T> {
    public previousHash: string
    public timestamp: number
    public payload: T
    public hash: string
    public index: number
    public nonce: number

    constructor(
        previousHash: string,
        timestamp: number,
        data: T,
        index: number,
        nonce: number
    ) {
        this.previousHash = previousHash
        this.timestamp = timestamp
        this.payload = data
        this.index = index
        this.nonce = nonce
        this.hash = this.calculateHash()
    }

    public calculateHash(): string {
        return crypto
            .createHash("sha256")
            .update(
                this.previousHash +
                    this.timestamp +
                    this.index +
                    JSON.stringify(this.payload)
            )
            .digest("hex")
    }

    public abstract printBlock(): void
}

