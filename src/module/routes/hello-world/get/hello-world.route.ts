import { OnGet, Route, Request } from '@hapiness/core';
import { HelloWorldService } from '../../../services';
import { Observable } from 'rxjs/Observable';

@Route({
    path: '/sayHello',
    method: 'GET'
})
export class GetHelloWorldRoute implements OnGet {
    /**
     * Class constructor
     * @param _helloWorldService
     */
    constructor(private _helloWorldService: HelloWorldService) {}

    /**
     * OnGet implementation
     *
     * @param request
     */
    onGet(request: Request): Observable<string> {
        return this._helloWorldService.sayHello();
    }
}
