import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class ClientService {
    constructor(
        private readonly httpService: HttpService,
    ){}

    public getHeader(name: string): string {
        return this.httpService.axiosRef.defaults.headers[name];
    }
}
