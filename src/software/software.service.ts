import { Injectable } from '@nestjs/common';
import { createSoftwareDTO } from './dto/CreateSoftwareDTO';
import { v4 as uuidv4 } from 'uuid';
import { EditarSoftwareDTO } from './dto/EditarSoftwareDTO';

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

  updateSoftware(id: string, dataSoftware: EditarSoftwareDTO) {
    const index = this.software.findIndex((software) => software.id === id);
    if (index !== -1) {
      this.software[index] = { ...this.software[index], ...dataSoftware };
      return this.software[index];
    }
    return null;
  }

  deleteSoftware(id: string) {
    const index = this.software.findIndex((software) => software.id === id);
    if (index !== -1) {
      this.software.splice(index, 1);
      return true;
    }
    return false;
  }
}
