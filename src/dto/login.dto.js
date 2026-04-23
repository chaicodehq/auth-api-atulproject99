import Joi from "joi";
import BaseDto from "../utils/base.dto.js";
export default class LoginDto extends BaseDto {
  static schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(322)
      .trim()
      .lowercase()
      .required()
      .label("Email"),
    password: Joi.string().min(6).max(256).required(),
  });
}
