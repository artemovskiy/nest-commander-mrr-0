import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

const userRoles = {
  1: ['view'],
  2: ['view', 'edit'],
};

@Injectable({ scope: Scope.REQUEST })
export class RolesService {
  constructor(@Inject(REQUEST) private readonly req: Request) {}

  private getReqRoles(): string[] {
    const authHeader = this.req.get('authorization');
    if (!authHeader) {
      return [];
    }
    const parsedAuth = JSON.parse(authHeader);
    return parsedAuth.roles ?? [];
  }

  hasRole(userId: number, role: string): boolean {
    // console.log({ roles: this.roles, role });
    const roles = this.req ? this.getReqRoles() : this.getRolesFromDb(userId);
    return roles.includes(role);
  }

  private getRolesFromDb(userId: number) {
    return userRoles[userId] ?? [];
  }
}
