export const errorHandeler =(statusCode, message)=>{
    const erroe =new Error()
    error.statusCoder=statusCode
    error.message = message
    return error;
}