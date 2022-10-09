import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @Length(4, 20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  noHp: string;
}

export class signin {
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

// export class SignUp {
//   @IsString()
//   @IsNotEmpty()
//   usernaeme: string;

//   @IsString()
//   @IsNotEmpty()
//   password: string;

// }
