function sum(a: number, b:number): number {
    return a+b;
}

type User2 = {
    firstName: string
    lastName: string
}

function getUserFullname(user: User2): string {
    return `${user.firstName} ${user.lastName}`
}

//optional param 
function getUserFullname1(user: User2, prefix?:string){
    return `${prefix ?? ''} ${user.firstName} ${user.lastName}`
}

//typed arrow functions
const getUserFullname2 = (user:User2, prefix?:string):string => `${prefix ?? ''} ${user.firstName} ${user.lastName}`

//function types
type EventContext = {
    value: string
}

function onEvent(eventName: string , eventCallback: (target: EventContext) => void){
    // implementation
}

//Typed Asynchronous Functions

type User3 = {
    id: number
    firstName: string
}
const users: User3[] = [
    { id: 1, firstName: "Jane" },
    { id: 2, firstName: "Jon" }
]

async function getUserById(userId: number): Promise<User3|null>{
    const foundUser = users.find(user => user.id === userId);
    if (!foundUser) {
        return null;
    }
    return foundUser;
}

//Adding Types to Rest Parameters
function sum1(...args:number[]){
    return args.reduce((acc, curr) => {
        return acc+curr
    },0)
}

// Function Overloads
type User4 = {
    id: number;
    email: string;
    fullName: string;
    age: number;
  };
  const users1: User4[] = [
    { id: 1, email: "jane_doe@example.com", fullName: "Jane Doe" , age: 35 },
    { id: 2, email: "jon_do@example.com", fullName: "Jon Doe", age: 35 }
  ];
function getUser(id:number): User4 | undefined;
function getUser(email: string): User4 | undefined;
function getUser(age: number): User4 | undefined;
function getUser(idOrEmailOrAge: number | string, fullName?: string): User4 | undefined {
    if (typeof idOrEmailOrAge === "string") {
        return users1.find(user => user.email === idOrEmailOrAge);
      }
    
      if (typeof fullName === "string") {
        return users1.find(user => user.age === idOrEmailOrAge && user.fullName === fullName);
      } else {
        return users1.find(user => user.id === idOrEmailOrAge);
      }
}

//User defined Type Guards
const isProduction = false
const valuesArray = ['some-string', isProduction && 'production']
function processArray(array: string[]){
    // do some thing
}
function isString(value: any): value is string {
    return typeof value === "string"
}

processArray(valuesArray.filter(isString))