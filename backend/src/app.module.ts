import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwareModule } from './software/software.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SoftwareModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
