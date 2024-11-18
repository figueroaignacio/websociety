import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'argon2';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists.');
    return this.userService.create(createUserDto);
  }

  async validateLocalUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found!');

    const isPasswordMatched = verify(user.password, password);
    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid Credentials!');

    return { id: user.id, name: user.name };
  }
}
