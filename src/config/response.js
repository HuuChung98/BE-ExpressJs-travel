// status code at here 
// response 200 
const successCode = (res, data, message) => {
    res.status(200).json({
        message,
        content: data,    
    })
}

// response fail 400 
const failCode = (res, data, message) => {
    res.status(400).json({
        message,
        content: data
    })
}

// response Error 500 
const errorCode = (res, message) => {
    res.status(500).json({
        message,
    })
}

export { successCode, failCode, errorCode}