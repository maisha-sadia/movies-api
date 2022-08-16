import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FavouriteMovie } from './favourite_movies.entity';
import { CreateFavouriteMovieDto } from './dto/create-favourite-movie.dto';
let fs = require('fs');
const { resolve } = require('path');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(FavouriteMovie)
    private favouriteMoviesRepository: Repository<FavouriteMovie>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user = await this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return user;
  }

  async createFavouriteMovie(
    user: Users,
    createFavouriteMovieDto: CreateFavouriteMovieDto,
  ): Promise<any> {
    const { movie_id } = createFavouriteMovieDto;
    const createMovie = await this.favouriteMoviesRepository.create({
      movie_id,
      user,
    });
    await this.userRepository.save(createMovie);
    return createMovie;
  }

  async updateMovie(id: string, dto: CreateUserDto): Promise<any> {
    return await this.userRepository.update(id, dto);
  }

  async delete(id: string): Promise<any> {
    return await this.userRepository.delete(id);
  }

  async getUserById(id: any): Promise<Users> {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async signIn(body: any): Promise<Users> {
    const found = await this.userRepository.findBy(body)[0];
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async addEditFavouriteMovies(userID, movie) {
    const user = await this.getUserById(userID);
  }

  // Inserting Data into the database
  async insertData() {
    const sql = fs.readFileSync(resolve(__dirname + '/sqldump.sql')).toString();

    await this.userRepository.query(sql);
  }
}
