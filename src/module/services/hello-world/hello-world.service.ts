import { Observable } from 'rxjs';
import { Injectable } from '@hapiness/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HelloWorldService {
    /**
     * Function to say Hello World
     * @return {Observable<string>}
     */
    sayHello(): Observable<string> {
        return of('Hello World');
    }
}
