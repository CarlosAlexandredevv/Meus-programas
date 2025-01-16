import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  getSoftwareById(@Param('id') id: string) {
    return this.softwareService.getSoftwareById(id);
  }
}
