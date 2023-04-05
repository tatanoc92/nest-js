import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    create(): string {
        return 'This action adds a new user';
    }

    findAll(): string {
        return 'This action returns a new user';
    }

    update(): string{
        return 'This action updates a user';
    }
}


