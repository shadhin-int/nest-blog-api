import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';

@Module({
  providers: userProviders,
})
export class UsersModule {}
