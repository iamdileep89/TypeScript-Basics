type programmer = {
    name: string,
    knownFor: string[],
    area? : string
}

const ada: programmer = {
    name: "Ada lovelace",
    knownFor: ["Amthematices", "computing"]
}

type Company = {
    name: string
    programmerDetail: programmer
}

const company1 : Company = {
    name: "abc",
    programmerDetail: {
        name: "huh",
        knownFor: ["ghjb", "kjb"]
    }
}


type Data = {
    [key: string]: any
}

const someData: Data = {
    someBooleanKey: true,
    someStringKey: "text goes here"
}

type mergeStringArray = [string, string, ...string[]]

const validArr: mergeStringArray = ["h", "hjbn"]



// UNIONS

type code = number | string

// INTERSECTIONS

type StatusResponse = {
    status: number
    isValid: boolean
}
type User1 = {
    name: string
}
type GetResponse = {
    user: User1
}


type ApiGetResponse = StatusResponse & GetResponse

let response: ApiGetResponse = {
    status: 200,
    isValid: true,
    user: {
        name: "jhghjbn"
    }
}

// TEMPLATE STRING TYPES
type StringTemplateType = `get${string}`
const myString: StringTemplateType = "getABB"

// TYPE ASSERTIONS
const valueA: any = 'something'
const valueB = valueA as string

// Utility Types - RECORD
type Data1 = Record<string, any>
const xData : Data1 = {
    someData: true
}

// Utility Types - OMIT
type UserRow = {
    id: number
    name: string
    email: string
    addressId: string
}

type TypeWithOutAdressId = Omit<UserRow, 'addressId'>
type UserWithOutIds = Omit<UserRow, 'id'|'addressId'>

// Utility Types - PICK
type UserRowWithEmail = Pick<UserRow, 'email'>
type UserRowWithEmailOrName = Pick<UserRow, 'email'|'name'>

// Utility Types - PARTIAL
type UserRowPartial = Partial<UserRow>



