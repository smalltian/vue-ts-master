/**
 * 交叉类型,多个类型的合并
 * @param first 类型1
 * @param second 类型2
 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  console.log(first)
  console.log(second)
  for (let id in first) {
    ;(<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<any>result)[id] = (<any>second)[id]
    }
  }
  console.log(result)
  return result
}

class Person {
  constructor(public name: string) {}
  ll() {}
}

interface Loggable {
  log(): void
}

class ConsoleLoggable implements Loggable {
  constructor(public message: string) {}
  log() {
    console.log(this.message)
  }
  go() {}
}

export const jim = extend(new Person('Jim'), new ConsoleLoggable('日志：'))

/**
 * 联合类型
 */
interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

function getSamllPet(): Fish | Bird {
  
}
