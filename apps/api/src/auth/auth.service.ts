import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  signup(createUserDto: CreateUserDto) {
    const user = this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists.');
    return this.userService.create(createUserDto);
  }
}
