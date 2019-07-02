import { Injectable } from '@nestjs/common';
import { createBaseService } from '../common/base-service';
import RoleModel from './model/role';

@Injectable()
export class RoleService extends createBaseService(RoleModel) {}
