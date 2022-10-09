import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './dto/auth.entity';
import { AuthCredentialsDto } from './dto/AuthCradintial.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createSecureServer(authCredentialDto: AuthCredentialsDto) {
    const { username, password, email, noHp } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    const hasshedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      email,
      noHp,
      password: hasshedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
