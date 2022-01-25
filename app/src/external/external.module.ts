import {Module} from "@nestjs/common";
import {ExternalController} from "./external.controller";
import { ExternalService } from "./external.service";
import {ClientModule} from "@schealex/nestjs-httpservice-test-lib/src";

@Module({
    imports: [ClientModule],
    controllers: [ExternalController],
    providers: [ExternalService],
})
export class ExternalModule {}
