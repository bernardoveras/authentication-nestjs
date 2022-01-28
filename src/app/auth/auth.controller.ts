import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('authenticate')
  async authenticate() {
    return { success: true };
  }
}
