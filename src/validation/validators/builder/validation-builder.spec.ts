import { EmailValidation, MinLengthValidation, RequiredFieldValidation } from "@/validation/validators"
import { ValidationBuilder } from "@/validation/validators/builder/validation-builder"

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('email').required().build()

    expect(validations).toEqual([new RequiredFieldValidation('email')])
  })

  test('should return EmailValidation', () => {
    const validations = ValidationBuilder.field('email').email().build()

    expect(validations).toEqual([new EmailValidation('email')])
  })

  test('should return MinLengthValidation', () => {
    const validations = ValidationBuilder.field('email').min(5).build()

    expect(validations).toEqual([new MinLengthValidation('email', 5)])
  })
})