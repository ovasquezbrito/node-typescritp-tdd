import { VehicleModelHelper } from '../helper/vehicle-model-helper'

export class VehicleModel {
  constructor (private readonly vehicle: VehicleModelHelper) {}

  getName (): string {
    return this.vehicle.name
  }

  getModel (): string {
    return this.vehicle.model
  }

  getYear (): number {
    return this.vehicle.year
  }

  getPrice (): number {
    return this.vehicle.price
  }

  getInventory (): boolean {
    return this.vehicle.inventory
  }
}
