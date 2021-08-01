import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name != null) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    } else {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }
  }
}
