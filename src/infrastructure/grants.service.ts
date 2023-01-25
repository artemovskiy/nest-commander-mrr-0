import { Injectable } from '@nestjs/common';
import { RolesService } from './roles.service';

@Injectable()
export class GrantsService {
  constructor(private readonly rolesService: RolesService) {}

  getGrants(): Record<string, boolean> {
    return {
      view: this.rolesService.hasRole('view'),
      edit: this.rolesService.hasRole('edit'),
      remove: this.rolesService.hasRole('remove'),
    };
  }
}
