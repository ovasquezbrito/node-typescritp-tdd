import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']
    let pro = ''
    for (const props of requiredProperties) {
      if (!httpRequest.body[props]) {
        pro = props
      }
    }
    return {
      statusCode: 400,
      body: new Error(`error in the: ${pro}`)
    }
  }
}
