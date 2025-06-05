import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthDto, RefreshTokenDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiBody({ type: AuthDto })
  signup(@Body() body: AuthDto) {
    return this.authService.signup(body);
  }

  @Post('login')
  @ApiBody({ type: AuthDto })
  login(@Body() body: AuthDto) {
    return this.authService.login(body);
  }

  @Post('refresh')
  refresh(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body);
  }

  @Post('logout')
  logout(@Body('userId') userId: string) {
    return { userId };
  }
  // --- Google OAuth ---
  @Get('google')
  googleLogin() {
    return { message: 'Redirect to Google Login URL' };
  }

  @Get('google/callback')
  googleCallback(@Query() query: string) {
    return { message: 'Handle Google callback', query };
  }

  @Post('google/token')
  googleLoginWithToken(@Body() body: { idToken: string }) {
    return { message: 'Google token received', token: body.idToken };
  }

  // --- Apple OAuth ---
  @Get('apple')
  appleLogin() {
    return { message: 'Redirect to Apple Login URL' };
  }

  @Get('apple/callback')
  appleCallback(@Query() query: string) {
    return { message: 'Handle Apple callback', query };
  }

  @Post('apple/token')
  appleLoginWithToken(@Body() body: { identityToken: string }) {
    return { message: 'Apple token received', token: body.identityToken };
  }
}
