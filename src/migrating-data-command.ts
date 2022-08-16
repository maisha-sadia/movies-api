import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users-not-working/users.service';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(AppModule);

  const command = process.argv[2];

  switch (command) {
    case 'run-sync':
      //initialises the services that will be used
      const userService = application.get(UsersService);

      const user = await userService.insertData();

      break;
    default:
      console.log('Command not found');
      process.exit(1);
  }

  await application.close();
  process.exit(0);
}

bootstrap();
