import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule as UsersOldModule } from './users-not-working/users.module';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'task-management',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   migrationsRun: true,
    // }),

    MongooseModule.forRoot('mongodb://127.0.0.1/movie-app'),

    // UsersOldModule,
    // TasksModule,
    UsersModule,
  ],
})
export class AppModule {}
