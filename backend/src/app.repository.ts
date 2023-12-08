import { TypeOrmModule } from '@nestjs/typeorm';

export const AppRepository = TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  });