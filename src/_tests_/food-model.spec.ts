import { FoodModelHelper } from '../helper/food-model-helper'
import { FoodModel } from '../models/food-model'

describe('Classes food model', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'name',
      description: 'description',
      price: 100,
      inventory: 50
    })
    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('name')
    expect(foodModel.getDescription()).toEqual('description')
    expect(foodModel.getPrice()).toBe(100)
    expect(foodModel.getInventory()).toBe(50)
  })

  it('Food model helper', () => {
    const foodHeper = new FoodModelHelper()

    expect(foodHeper).toEqual(foodHeper)
  })
})
