export class RegisterVehicle {
  handle (httpRequest: any): any {
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
