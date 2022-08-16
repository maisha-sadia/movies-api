import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity';

@Controller('users-old')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('')
  getAllUsers(): Promise<any> {
    return this.usersService.findAll();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<Users> {
    return this.usersService.getUserById(id);
  }

  @Post('add-user')
  create(@Body() body) {
    return this.usersService.createUser(body);
  }

  // Not working
  @Post('user')
  signIn(@Body() body): Promise<Users> {
    return this.usersService.signIn(body);
  }

  // Favourite Movies
  @Post('favourite-movie')
  addEditFavouriteMovies(@Body() model) {
    return this.usersService.createFavouriteMovie(model.user, model.data);
  }
}
