import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwareModule } from './software/software.module';

@Module({
  imports: [SoftwareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
