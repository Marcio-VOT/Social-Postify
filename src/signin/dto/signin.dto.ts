import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class SignInDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(20)
  password: string;
}
