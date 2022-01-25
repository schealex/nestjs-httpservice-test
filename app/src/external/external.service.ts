import { Injectable } from '@nestjs/common';
import {ClientService} from '@schealex/nestjs-httpservice-test-lib/src';

@Injectable()
export class ExternalService {
    constructor(
      private readonly clientService: ClientService,
    ){}

    getHeader(
        name: string,
    ): string {
        return this.clientService.getHeader(name);
    }
}
