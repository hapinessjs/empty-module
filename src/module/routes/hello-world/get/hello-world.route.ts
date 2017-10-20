import { OnGet, Route, ReplyNoContinue, Request } from '@hapiness/core';
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
     * @param request
     * @param reply
     */
    onGet(request: Request, reply: ReplyNoContinue): Observable<any> {
        return this._helloWorldService.sayHello();
    }
}
