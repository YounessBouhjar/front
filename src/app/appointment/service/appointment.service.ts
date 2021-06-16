import { HttpClient } from '@angular/common/http';
import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../module/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointment:Appointment 
  
  constructor(private http: HttpClient) {
   }

  public addAppointment(appointment: Appointment) {
    return this.http.post<Appointment>('http://localhost:8091/addAppointment' ,appointment);
    
  }
 
}
