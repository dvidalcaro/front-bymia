import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * @method intercept
   * @param req
   * @param next
   */
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
        setHeaders: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjY5MDQxMTMsImV4cCI6MTYyNjk5MDUxMywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InJvb3RAZ21haWwuY29tIiwiaXAiOiIxODkuMjAzLjEwMi4xOTcifQ.W-nQZHyifbDjPXbasiclRzGlTYvuxQy-BeYSdyqfow-qGwSMuzBBlr7y3AsrAD3JUwU6RQqOMs1BCwSHeeCoZby5tXE12LomvhA5Ees6nEYKcj5uceFV3hRkKekuRZ0di5KQtN8a-mnkmY8j5DS4td_5nCmPvni0ghdkHm9LyYeKiknxkmE4L1TXrTd8xtJhmyDdSP5BgpJOcYL8AuWdzdSNyzJaEgZuYO22JGtZOReIwXmk-eVhkaNyfATun8rxW3ekSJtlMNdJ-zMCd2rQHt9qt1umpTkWBDMsOCHVOlfqFyFOQlJUqQcY_RR9woADa5sV_mG0cbcSebtGyaGtiA',
            //Authorization: 'Basic ' + btoa('username:password'),
        }
    });

    return next.handle(req);
  }
}
