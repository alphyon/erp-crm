import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {AuthService} from "../../auth";
import {URL_API} from "../../../../config/config";
import {catchError, finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  isLoading$: Observable<boolean>
  isLoadingSubject: BehaviorSubject<boolean>

  constructor(
    private http: HttpClient,
    public authservice: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  registerRole(data: any) {
    let url = URL_API + "/roles";
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authservice.token})
    return this.http.post(url, data, {
      headers: headers,
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<any>) => {
        console.log(response)
        return {
          body: response.body,
          status: response.status
        }
      }),
      finalize(() => this.isLoadingSubject.next(false)),
      catchError((error: HttpResponse<any>): any => {
        return throwError(() => error);
      })
    )
  }

  updateRole(id: string, data: any) {
    let url = URL_API + "/roles/" + id;
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authservice.token})
    return this.http.put(url, data, {
      headers: headers,
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<any>) => {
        console.log(response)
        return {
          body: response.body,
          status: response.status
        }
      }),
      finalize(() => this.isLoadingSubject.next(false)),
      catchError((error: HttpResponse<any>): any => {
        return throwError(() => error);
      })
    )
  }

  deleteRole(id: string) {
    let url = URL_API + "/roles/" + id;
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authservice.token})
    return this.http.delete(url, {
      headers: headers,
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<any>) => {
        console.log(response)
        return {
          body: response.body,
          status: response.status
        }
      }),
      finalize(() => this.isLoadingSubject.next(false)),
      catchError((error: HttpResponse<any>): any => {
        return throwError(() => error);
      })
    )
  }

  listRoles(page = 1, search = '') {
    let url = URL_API + "/roles?page=" + page + '&search=' + search;
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authservice.token})
    return this.http.get(url, {
      headers: headers
    }).pipe(finalize(() => this.isLoadingSubject.next(false)))
  }
}
