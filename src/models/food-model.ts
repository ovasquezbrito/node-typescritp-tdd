import { foodModelHelper } from '../helper/food-model-helper'

export class FoodModel {
  constructor (private readonly food: foodModelHelper) { }

  getName (): string {
    return this.food.name
  }

  getDescription (): string {
    return this.food.description
  }

  getPrice (): number {
    return this.food.price
  }
}
