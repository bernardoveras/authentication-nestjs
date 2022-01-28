import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/app/helpers/messages.helper";
import { RegExHelper } from "src/app/helpers/regex.helper";

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, {message: MessagesHelper.PASSWORD_INVALID})
  password: string;
}

