import { Component, OnInit } from '@angular/core';
import { Flight } from '../flights.model';
import { FlightsService } from '../flights.service';
import { FormGroup } from '@angular/forms';


export interface To_City {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }







from_city: To_City[] = [
  {value: 'ADDIS ABABBA (ADD)', viewValue: 'ADDIS ABABBA (ADD)'},
  {value: 'DUBAI (DXB)', viewValue: 'DUBAI (DXB)'},
  {value: 'ELDORET (ELD)', viewValue: 'ELDORET (ELD)'},
  {value: 'INSTABUL (IST)', viewValue: 'INSTABUL (IST)'},
  {value: 'JOHANNESBURG (JNB)', viewValue: 'JOHANNESBURG (JNB)'},
  {value: 'KISUMU (KIS)', viewValue: 'KISUMU (KIS)'},
  {value: 'KINSHASA (FIH)', viewValue: 'KINSHASA (FIH)'},
  {value: 'LIBREVILLE (LBV)', viewValue: 'LIBREVILLE (LBV)'},
  {value: 'NAIROBI (NBO)', viewValue: 'NAIROBI (NBO)'},
  {value: 'MOMBASA (MBA)', viewValue: 'MOMBASA (MBA)'},
  {value: 'HARARE (HRE)', viewValue: 'HARARE (HRE)'},
  
  
  

];


}

