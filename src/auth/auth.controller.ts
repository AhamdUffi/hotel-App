import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthCredentialsDto, signin } from './dto/AuthCradintial.dto';

@Controller('auth')
export class AuthController {
  constructor(private authaService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthCredentialsDto) {
    return this.authaService.singUp(dto);
  }

  @Post('signin')
  signin(@Body() dto: signin): Promise<{ accessToken: string }> {
    return this.authaService.singin(dto);
  }
}
