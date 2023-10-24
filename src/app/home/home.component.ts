import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flights.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';



export interface To_City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  flights!: Flight[];

  dataSource!: MatTableDataSource<Flight>;
  displayedColumns: string[] = ['airline_iata', 'flight_iata', 'flight_number', 'dep_iata', 'arr_iata', 'dep_time', 'arr_time', 'status'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator 
  @ViewChild(MatSort)
  sort!: MatSort;
  httpClient: any;



  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }






 
  from_city: To_City[] = [
    {value: 'ADDIS ABABA (ADD)', viewValue: 'ADDIS ABABBA (ADD)'},
    {value: 'BAHRAIN (BAH)', viewValue: 'BAHRAIN (BAH)'},
    {value: 'BLANTYRE (BLZ)', viewValue: 'BLANTYRE (BLZ)'},
    
    {value: 'DELHI (DEL)', viewValue: 'DELHI (DEL)'},
    {value: 'DOHA (DOH)', viewValue: 'DOHA (DOH)'},
    {value: 'DUBAI (DXB)', viewValue: 'DUBAI (DXB)'},
    {value: 'ELDORET (ELD)', viewValue: 'ELDORET (ELD)'},
    {value: 'ENTEBBE (EBB)', viewValue: 'ENTEBBE (EBB)'},
    {value: 'GABORONE (GBE)', viewValue: 'GABORONE (GBE)'},
    {value: 'HARARE (HRE)', viewValue: 'HARARE (HRE)'},
    {value: 'INSTABUL (IST)', viewValue: 'INSTABUL (IST)'},
    {value: 'JOHANNESBURG (JNB)', viewValue: 'JOHANNESBURG (JNB)'},
    {value: 'JUBA (JUB)', viewValue: 'JUBA (JUB)'},
    {value: 'KISUMU (KIS)', viewValue: 'KISUMU (KIS)'},
    {value: 'KINSHASA (FIH)', viewValue: 'KINSHASA (FIH)'},
    {value: 'KILIMANJARO (JRO)', viewValue: 'KILIMANJARO (JRO)'},
    {value: 'LIBREVILLE (LBV)', viewValue: 'LIBREVILLE (LBV)'},
    {value: 'LAGOS (LOS)', viewValue: 'LAGOS (LOS)'},
    {value: 'NAIROBI (NBO)', viewValue: 'NAIROBI (NBO)'},
    {value: 'MALINDI (MYD)', viewValue: 'MALINDI (MYD)'},
    {value: 'MOMBASA (MBA)', viewValue: 'MOMBASA (MBA)'},
    {value: 'PARIS FRANCE (CDG)', viewValue: 'PARIS FRANCE (CDG)'},
    {value: 'UKUNDA (UKA)', viewValue: 'UKUNDA (UKA)'},
    {value: 'SHARJAH (SHJ)', viewValue: 'SHARJAH (SHJ)'},

    
    
    

  ];



}









