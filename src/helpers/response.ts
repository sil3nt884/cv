export const sendResponse = (body: any, status: number) => {
    return {
        headers : {
            'content-type': 'application/json'
        },
        statusCode: status,
        body: JSON.stringify(body),
    }
}