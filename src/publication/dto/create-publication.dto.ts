import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUrl,
  Matches,
} from 'class-validator';

export class CreatePublicationDTO {
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsDateString({ strict: true })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: `Date must be on the format 'YYYY-MM-DD'`,
  })
  dateToPublish: Date;

  @IsNotEmpty()
  @IsString()
  socialMedia: string;
}
