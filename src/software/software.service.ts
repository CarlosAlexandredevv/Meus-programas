import { Injectable } from '@nestjs/common';
import { createSoftwareDTO } from './dto/CreateSoftwareDTO';

@Injectable()
export class SoftwareService {
  private software = [];

  getSoftware() {
    return this.software;
  }

  createSoftware(newSoftware: createSoftwareDTO) {
    return this.software.push(newSoftware);
  }
}
