import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class SignInDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(8)
  password: string;
}
