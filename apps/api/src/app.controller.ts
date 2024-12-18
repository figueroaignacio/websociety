import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './db/db.service';

@Controller()
export class AppController {
  constructor(private databaseService: DatabaseService) {}

  @Get('check-db')
  async checkDatabase() {
    try {
      const result = await this.databaseService.query('SELECT NOW();');
      return { message: 'Success Connection', time: result[0].now };
    } catch (error) {
      return { message: 'Error Connection', error };
    }
  }
}
