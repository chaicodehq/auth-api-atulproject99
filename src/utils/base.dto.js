import Joi from "joi";

export default class BaseDto {
  static schema = Joi.object({});

  static validate(data) {
    const { error, value } = this.schema.validate(data);
    if (error) {
      const errorMessage = error.details.map((e) => e.message);
      return { error: errorMessage, value: null };
    }
    return { error: null, value };
  }
}
