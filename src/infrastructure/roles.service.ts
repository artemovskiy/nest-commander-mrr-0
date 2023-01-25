import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class RolesService {
  private readonly roles: string[] = [];

  constructor(@Inject(REQUEST) private readonly req: Request) {
    const authHeader = this.req.get('authorization');
    if (!authHeader) {
      return;
    }
    const parsedAuth = JSON.parse(authHeader);
    this.roles = parsedAuth.roles ?? [];
  }

  hasRole(role: string): boolean {
    // console.log({ roles: this.roles, role });
    return this.roles.includes(role);
  }
}
