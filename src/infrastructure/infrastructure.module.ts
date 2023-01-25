import { Module } from '@nestjs/common';
import { GrantsService } from './grants.service';
import { RolesService } from './roles.service';

@Module({
  providers: [GrantsService, RolesService],
  exports: [GrantsService],
})
export class InfrastructureModule {}
