import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from '../authRepository';
import { JwtPayload } from '../jwt.payload.interface';
import { User } from './auth.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userREpository: UserRepository,
  ) {
    super({
      secretOrKey: 'topSecret51',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { email } = payload;

    const user: User = await this.userREpository.findOne({
      where: {
        email: email,
      },
    });

    if (!email) {
      throw new UnauthorizedException('token not valid');
    } else {
      return user;
    }
  }
}
