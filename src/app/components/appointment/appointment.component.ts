import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Appointment } from 'src/app/appointment/module/appointment';
import { AppointmentService } from 'src/app/appointment/service/appointment.service';
import { Client } from 'src/app/client/module/client.module';
import { ClientService } from 'src/app/client/service/client.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments:Appointment[]=[];
  appointment:Appointment
  clientId:string=sessionStorage.getItem('currentClientId')
  constructor(private appointmentService:AppointmentService,private clientService:ClientService) { }
  Form = new FormGroup({
    motif: new FormControl('', Validators.required),
  });

  get motif() {
    return this.motif.get('motif');
  }

  ngOnInit(): void {
    this.getAppointments()
  }
  
  getAppointments(){
    this.clientService.findClientAppointments(this.clientId).subscribe(
      (response : Appointment[])=>{
        this.appointments=response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message);
      }
    );

}
   onAddAppointment(appointment:Appointment){ 

this.appointment=this.Form.value
  if(appointment.motif===""){
    alert("Veuillez saisir votre motif")
  }
  else{
      this.appointment.status="pending"

      this.appointmentService.addAppointment(this.appointment).subscribe(
        response =>{ 
          console.log("Ajout reussi")
          this.getAppointments()
        },
        (error:HttpErrorResponse) =>{ 
          console.log(error)
        }
      )
    }
  }
}
