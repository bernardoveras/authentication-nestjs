import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async authenticate(user) {
    const payload = { id: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload)
    };
  }

  async validateUser(email: string, password: string) {
    let user;

    try {
      user = await this.userService.findOne({ email }, { select: ['id', 'firstName', 'lastName', 'email', 'password'] });
    } catch (error) {
      return null;
    }

    console.log(user);

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
