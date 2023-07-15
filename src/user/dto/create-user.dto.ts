import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minUppercase: 0,
  })
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}
