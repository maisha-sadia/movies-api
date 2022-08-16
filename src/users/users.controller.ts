import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('')
  getAllUsers(): Promise<any> {
    return this.usersService.getAllUsers();
  }

  //   @Get('/:id')
  //   getUserById(@Param('id') id: string): Promise<any> {
  //     return this.usersService.getUserById(id);
  //   }

  @Post('add-user')
  addUser(@Body() body) {
    return this.usersService.addUser(body);
  }

  @Post('sign-in')
  async signIn(@Body() body): Promise<any> {
    return await this.usersService.signIn(body);
  }

  // Favourite Movies
  @Post('favourite-movie/:userID')
  addEditFavouriteMovie(@Param('userID') userID, @Body() model) {
    return this.usersService.addEditFavouriteMovie(userID, model.data);
  }

  @Delete('favourite-movie/:movieID')
  deleteFavouriteMovies(@Param('movieID') movieID) {
    return this.usersService.deleteFavouriteMovie(movieID);
  }
}
