import { TransactionBlockchain } from "./transactions/transaction-blockchain"
import { Transaction } from "./transactions/transaction"

const transactionBlockchain = new TransactionBlockchain()

const transaction1 = new Transaction("1", 100, new Date(), "Alice", "Bob")
const transaction2 = new Transaction("2", 50, new Date(), "Bob", "Charlie")

transactionBlockchain.addBlock(transaction1)
transactionBlockchain.addBlock(transaction2)

transactionBlockchain.printBlockchain()
console.log(`Is blockchain valid: ${transactionBlockchain.isChainValid()}`)
console.log("Bob changes 1st transaction amount to 10000")
transaction1.amount = 10000
console.log(`Is blockchain valid: ${transactionBlockchain.isChainValid()}`)

