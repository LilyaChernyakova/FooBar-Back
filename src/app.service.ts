/*eslint-disable*/
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Lilo! You\'re the best <3';
  }
}
