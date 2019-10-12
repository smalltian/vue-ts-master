import { StringValidator } from './Validations'

const letterRegexp = /^[A-Za-z]+$/

export class HasLetterOnlyString implements StringValidator {
  isAcceptable(s: string) {
    return letterRegexp.test(s)
  }
}
