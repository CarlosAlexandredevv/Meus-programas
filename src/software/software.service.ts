import { Injectable } from '@nestjs/common';
import { createSoftwareDTO } from './dto/CreateSoftwareDTO';
import { v4 as uuidv4 } from 'uuid';
import { EditarSoftwareDTO } from './dto/EditarSoftwareDTO';
import { format } from 'date-fns';

@Injectable()
export class SoftwareService {
  private software = [];

  getSoftware() {
    return this.software.map((software) => ({
      ...software,
      createdAt: format(new Date(software.createdAt), 'dd/MM/yyyy'),
      free: software.free ? 'Sim' : 'Não',
    }));
  }

  createSoftware(newSoftware: createSoftwareDTO) {
    const softwareWithId = {
      id: uuidv4(),
      userId: 0,
      createdAt: new Date(),
      ...newSoftware,
    };
    this.software.push(softwareWithId);
    return softwareWithId;
  }

  getSoftwareById(id: string) {
    const software = this.software.find((software) => software.id === id);
    if (software) {
      software.createdAt = format(new Date(software.createdAt), 'dd/MM/yyyy');
      software.free = software.free ? 'Sim' : 'Não';
    }
    return software;
  }

  updateSoftware(id: string, dataSoftware: EditarSoftwareDTO) {
    const index = this.software.findIndex((software) => software.id === id);
    if (index !== -1) {
      const existingSoftware = this.software[index];
      this.software[index] = {
        ...existingSoftware,
        ...dataSoftware,
        id: existingSoftware.id,
        userId: existingSoftware.userId,
        createdAt: existingSoftware.createdAt,
      };
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
