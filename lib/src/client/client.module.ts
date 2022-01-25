import { Module } from '@nestjs/common';
import {ClientService} from "./client.service";
import {AxiosModule} from "../axios";

@Module({
  imports: [AxiosModule],
  exports: [ClientService],
  providers: [ClientService],
})
export class ClientModule {}
