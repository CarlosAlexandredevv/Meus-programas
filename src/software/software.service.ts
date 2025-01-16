import { Injectable } from '@nestjs/common';
import { createSoftwareDTO } from './dto/CreateSoftwareDTO';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SoftwareService {
  private software = [];

  getSoftware() {
    return this.software;
  }

  createSoftware(newSoftware: createSoftwareDTO) {
    const softwareWithId = {
      id: uuidv4(),
      ...newSoftware,
    };
    this.software.push(softwareWithId);
    return softwareWithId;
  }

  getSoftwareById(id: string) {
    return this.software.find((software) => software.id === id);
  }
}
