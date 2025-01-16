import { Body, Controller, Get, Post } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { createSoftwareDTO } from './dto/CreateSoftwareDTO';

@Controller('software')
export class SoftwareController {
  constructor(private readonly softwareService: SoftwareService) {}

  @Get()
  getSoftware() {
    return this.softwareService.getSoftware();
  }

  @Post()
  createSoftware(@Body() dataSoftware: createSoftwareDTO) {
    return this.softwareService.createSoftware(dataSoftware);
  }
}
