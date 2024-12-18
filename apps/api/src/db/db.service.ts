import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);
  private pool: Pool;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    this.pool = new Pool({
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      user: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
    });

    try {
      const client = await this.pool.connect();
      this.logger.log('Connection Succesfully');
      client.release();
    } catch (error) {
      this.logger.error('Error Connection', error);
    }
  }

  async query(queryString: string) {
    try {
      const result = await this.pool.query(queryString);
      return result.rows;
    } catch (error) {
      this.logger.error('Execute Error', error);
      throw error;
    }
  }
}
