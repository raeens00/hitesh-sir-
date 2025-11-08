class ApiResponse {
    constructor(statusCode, data = null, message = 'success') {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.succes = statusCode < 200
    }   
}

export default ApiResponse;