import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './authRepository';
import { AuthCredentialsDto, signin } from './dto/AuthCradintial.dto';
import { JwtPayload } from './jwt.payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  //   signUp
  async singUp(authCrendentialDto: AuthCredentialsDto) {
    return this.userRepository.createSecureServer(authCrendentialDto);
  }

  //  signin
  async singin(signin: signin): Promise<{ accessToken: string }> {
    const { email, password } = signin;
    const user = await this.userRepository.findOne({ where: { email } });

    if (email && bcrypt.compare(password, user.password)) {
      const payload: JwtPayload = { email };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('no data');
    }
  }
}
