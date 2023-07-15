import { IsDate, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minUppercase: 0,
  })
  password: string;
  @IsDate()
  updatedAt?: Date | undefined;
}
