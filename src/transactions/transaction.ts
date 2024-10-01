export class Transaction {
    public id: string
    public amount: number
    public date: Date
    public sender: string
    public reciver: string

    constructor(
        id: string,
        amount: number,
        date: Date,
        sender: string,
        reciver: string
    ) {
        this.id = id
        this.amount = amount
        this.date = date
        this.sender = sender
        this.reciver = reciver
    }

    public static getNullTransaction(): Transaction {
        return new Transaction("", 0, new Date(0), "", "")
    }
}

