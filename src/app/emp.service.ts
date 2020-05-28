import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Employee } from './employee';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
   'secure':'false'
  })}
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url:string='https://localhost:44363/api/empls';

  constructor(private http:HttpClient) { }

  public GetAllEmps():Observable<any>
  {
   return this.http.get<Employee[]>(this.url);
  }

  public AddEmp(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url,JSON.stringify(emp),Requestheaders);
  }
  
  
  
}
