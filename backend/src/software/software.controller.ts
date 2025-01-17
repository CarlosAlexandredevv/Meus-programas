import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SoftwareService } from './software.service';
import { createSoftwareDTO } from './dto/CreateSoftwareDTO';

import { EditarSoftwareDTO } from './dto/EditarSoftwareDTO';

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

  @Put(':id')
  updateSoftware(
    @Param('id') id: string,
    @Body() dataSoftware: EditarSoftwareDTO,
  ) {
    dataSoftware.id = id;
    return this.softwareService.updateSoftware(id, dataSoftware);
  }

  @Delete(':id')
  deleteSoftware(@Param('id') id: string) {
    return this.softwareService.deleteSoftware(id);
  }
}
