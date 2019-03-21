/**
 * 枚举类型
 */
enum Response {
    No = 0,
    Yes = 1,
}


const response = (rec: string, message: Response): void => {
    if (message === 1) {
        console.log('yes');
    } else {
        console.log('no');
    }
};

export {
    Response,
    response,
}
