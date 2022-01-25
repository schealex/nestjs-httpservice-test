import {Controller, Get, Query} from '@nestjs/common';
import {ExternalService} from "./external.service";

@Controller('')
export class ExternalController {
    constructor(
        private readonly externalService: ExternalService,
    ){}

    @Get()
    async getHeader(
        @Query('header') header: string,
    ): Promise<string> {
        return this.externalService.getHeader(header);
    }
}
