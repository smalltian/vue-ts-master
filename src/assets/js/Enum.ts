export enum Response {
  NO = 0,
  YES = 1
}

export const response = (rec: string, message: Response): void => {
  if (message === 1) {
    console.log('yes')
  } else {
    console.log('no')
  }
}
