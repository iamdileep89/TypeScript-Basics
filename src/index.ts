// Basic Types

let id: number = 5;
let company: string = 'Media'
let isPublished: boolean = true

let x: any = 'hello'
x = 65

let ids: number[]= [1,3,4,5,6]
let arr: any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'media', false]

// Tuple Array
let employees: [number, string][]
employees = [
    [1, 'media'],
    [2, 'code'],
    [3, 'hello']
]

// Unions
let pid: string|number
pid=22
pid='code'

// Enum
enum direction1{
    Up=1,
    Down,
    Left,
    Right
}

enum direction2{
    Up = 'Up',
    Down='Down',
    Left='Left',
    Right='Right'
}

console.log(direction2)

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id:1,
    name: 'code'
}

//Type Assertion
let cid: any = 1
let customerId = <number>cid
customerId = cid as number

//Functions
function addNum(x:number, y: number):number {
    return x+y
}

// Void
function log(msg: string|number): void {
    console.log(msg)
}

//Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}
const user1: UserInterface ={
    id: 1,
    name: 'code'
}

interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number):number => x+y;
const sub: MathFunc = (x:number, y:number):number => x-y;



//Classes
interface PersonInterface {
    id:number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id:number
    name: string

    constructor(id:number, name: string){
        this.id=id
        this.name=name
    }
    register(){
        return `${this.name} is registered now!`
    }
}
const media = new Person(1, 'media');
const code = new Person(2, 'code');



// SubClasses

class Employee  extends  Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position = position
    }
}

const employee = new Employee(1, 'media', 'engineer')


//Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let stringArray = getArray<string>(['code', 'media', 'hello'])

// stringArray.push(1) // throws error
stringArray.push('world') // works fine