import { Controller, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    
    @Post()
    create() {
        this.authService.create();
    }

    @Get()
    findAll() {
        return this.authService.findAll();
    }

    @Put()
    update() {
        return this.authService.update();
    }
}
