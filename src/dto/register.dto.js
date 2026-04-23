import Joi from "joi";
import BaseDto from "../utils/base.dto.js";
export default class RegisterDto extends BaseDto {
  static schema = Joi.object({
    name: Joi.string().required().trim().min(2).max(50),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(322)
      .trim()
      .lowercase()
      .required()
      .label("Email"),
    password: Joi.string().min(6).max(256).required(),
    role: Joi.string().optional(),
  });
}
