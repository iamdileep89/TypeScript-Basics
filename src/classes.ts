// class NewPerson {
//     name: string
//     age: number
//     instantiatedAt = Date
//     constructor(name: string,age:  number){
//          this.name = name
//          this.age = age
//     }
// }

// const instance = new NewPerson("hello", 20)

 interface Logger {
     debug(message: string, metadata?: Record<string, unknown>): void
     info(message: string, metadata?: Record<string, unknown>): void
     warn(message: string, metadata?: Record<string, unknown>): void
     error(message: string, metadata?: Record<string, unknown>): void
 }

 interface Clearable {
     clear(): void
 }

 class ConsoleLogger implements Logger, Clearable {
     clear(){
         console.clear()
     }
     debug(message: string, metadata?: Record<string, unknown>){
         console.info(`[DEBUG] ${message}`, metadata)
     }
     info(message: string, metadata?: Record<string, unknown>){
        console.info(`${message}`, metadata)
    }
    warn(message: string, metadata?: Record<string, unknown>){
        console.info(`${message}`, metadata)
    }
    error(message: string, metadata?: Record<string, unknown>){
        console.info(`${message}`, metadata)
    }
 }