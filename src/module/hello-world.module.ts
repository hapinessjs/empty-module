import { HapinessModule } from '@hapiness/core';
import { GetHelloWorldRoute } from './routes';
import { HelloWorldService } from './services';

@HapinessModule({
    version: '1.1.1',
    declarations: [
        GetHelloWorldRoute
    ],
    providers: [
        HelloWorldService
    ],
    exports: [
        HelloWorldService
    ]
})
export class HelloWorldModule {}
