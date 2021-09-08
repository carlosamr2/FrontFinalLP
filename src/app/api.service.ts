import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from  './hotel';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8000";
  constructor(private httpClient:HttpClient ) { }

  readHotel(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.PHP_API_SERVER}/hoteles`);
  }
  createHotel(hotel: Hotel): Observable<Hotel>{
    return this.httpClient.post<Hotel>(`${this.PHP_API_SERVER}/hoteles/add`, hotel);
  }

  updateHotel(hotel: Hotel){
    return this.httpClient.put<Hotel>(`${this.PHP_API_SERVER}/hoteles/mod/${hotel.id}`, hotel);   
  }
  deleteHotel(id: number){
    return this.httpClient.delete<Hotel>(`${this.PHP_API_SERVER}/hoteles/${id}`);
  }
}
