import { createBaseService } from '../common/base-service';
import { Injectable } from '@nestjs/common';
import UserModel, { User } from './model/user';
import { UserInput } from './dto/UserInput';
import { UserArgs } from './dto/user.args';
import { of } from 'rxjs';

@Injectable()
export class UserService extends createBaseService(UserModel) {}
