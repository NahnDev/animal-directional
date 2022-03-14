import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PublicApi } from 'src/decorators/public-api.decorator';
import { RequestUser } from 'src/decorators/request-user.decorator';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
@PublicApi()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  @Post()
  @UseGuards(LocalGuard)
  async login(@Body() login: LoginDto, @RequestUser() user: User) {
    return {
      user: user,
      accessToken: await this.authService.generateAccessToken(user),
    };
  }
}