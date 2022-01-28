import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('authenticate')
  async authenticate(@Req() req:any) {
    return this.authService.authenticate(req.user);
  }
}
