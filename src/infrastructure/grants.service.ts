import { Injectable } from '@nestjs/common';
import { RolesService } from './roles.service';

@Injectable()
export class GrantsService {
  constructor(private readonly rolesService: RolesService) {}

  getGrants(userId: number): Record<string, boolean> {
    return {
      view: this.rolesService.hasRole(userId, 'view'),
      edit: this.rolesService.hasRole(userId, 'edit'),
      remove: this.rolesService.hasRole(userId, 'remove'),
    };
  }
}
