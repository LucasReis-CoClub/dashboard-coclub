export type ResponseApiError = {
    errorType?: 'BAD_REQUEST' | 'UNPROCESSABLE_ENTITY' | any
    message?: ResponseApiErrorMessage
    timestamp?: Date
}

export interface ResponseApiErrorMessage {
    error?: string
    error_description?: string
}