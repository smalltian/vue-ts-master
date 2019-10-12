/**
 * 普通函数
 * @param arg 返回任意类型
 */

const identity = (arg: number): number => {
  return arg
}

/**
 * 泛型
 * @param arg 返回指定类型
 */
export const identityT = <T>(arg: T): T => {
  return arg
}

/***==================泛型接口 start=============== */

//范型类型作为对象变量参数
interface GenericIdentityFn {
  <T>(arg: T): T
  <T>(obj: T): T
}

export const myIdentityT_2: GenericIdentityFn = identityT

//将范型类型作为接口的一个参数
interface THasParam<T> {
  (arg: T): T
}

export const tHasParam: THasParam<number> = identityT

/**======================泛型接口 end =========================== */

/**======================范型类 s =========================== */
export class Generic<T> {
  zeroValue: T | undefined
  add: ((x: T, y: T) => T) | undefined
}

/**======================范型类 e =========================== */

/**
 * 范型约束条件
 */
interface Lengthwise {
  length: number
}

// 这个范型不再适用于任何类型
export const logging = <T extends Lengthwise>(arg: T): T => {
  console.log('length约束: ' + arg.length)
  return arg
}

/**
 * 范型和约束使用类型参数
 * @param obj
 * @param key
 */
export const getProperty = (obj: T, key: K) => {
  return obj[key]
}
