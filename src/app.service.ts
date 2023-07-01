import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! AGEC2!!';
  }

  getPut(): string {
    return 'Hello putin!';
  }
}
