import { Injectable, Type } from '@angular/core';
import { Flight } from './flights.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

// Node Express API


@Injectable({
  providedIn: 'root'
})



export class FlightsService {

  flights: Flight[] = [
    {"dep_iata":"NAIROBI(NBO)","arr_iata":"KIGALI (KGL)","flight_iata":"WB453","flight_number":"453","airline_iata":"WB","status":false,"dep_time":"2023-02-23T08:20:00.000Z","arr_time":"2023-02-23T08:50:00.000Z"},
    {"dep_iata":"NAIROBI (NBO)","arr_iata":"MOGADISHU (MGQ)","flight_iata":"FDT101","flight_number":"101","airline_iata":"Freedom Express Airline","status":false,"dep_time":"2023-02-23T08:20:00.000Z","arr_time":"2023-02-23T08:50:00.000Z"},
    {"dep_iata":"NAIROBI (NBO)","arr_iata":"HARARE (HRE)","flight_iata":"KQ704","flight_number":"704","airline_iata":"KQ","status":false,"dep_time":"2023-02-23T08:20:00.000Z","arr_time":"2023-02-23T08:50:00.000Z"},
    {"dep_iata":"KISUMU (KIS)","arr_iata":"NAIROBI (NBO)","flight_iata":"JM8659","flight_number":"JMA8659","airline_iata":"Jambo","status":false,"dep_time":"2023-02-23T08:20:00.000Z","arr_time":"2023-02-23T08:50:00.000Z"},

         ];
  
    constructor() { }

    getFlights() {
      return this.flights;
       
    }
  
    postFlight(flight: Flight) {
  
    }
  
    deleteFlight(id: number) {
      
    }
  
  }
  
  