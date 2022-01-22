export interface Client {
    fisrtName: 'string',
    lastName: 'string',
    phoneNumber: 'string',
    email: 'string',
}

export interface Phone {
    mark: string,
    model: string,
    serialNumber: string,
    problem: string,
    client_id: number
}

export interface Repair {
    solution: string,
    price: number,
    date: Date,
    phone_id: number
}