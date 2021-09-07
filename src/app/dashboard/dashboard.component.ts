import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hoteles:  Hotel[];
  selectedHotel:  Hotel  = { id :  null , nombre:null, precio:  null};
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readHotel().subscribe((hoteles: Hotel[])=>{
      this.hoteles = hoteles;
      console.log(this.hoteles);
    })
  }
  createOrUpdateHotel(form){
    if(this.selectedHotel && this.selectedHotel.id){
      form.value.id = this.selectedHotel.id;
      this.apiService.updateHotel(form.value).subscribe((hotel: Hotel)=>{
        console.log("Hotel updated" , hotel);
      });
    }
    else{
      this.apiService.createHotel(form.value).subscribe((hotel: Hotel)=>{
        console.log("Hotel created, ", hotel);
      });
    }

  }

  selectHotel(hotel: Hotel){
    this.selectedHotel = hotel;
  }

  deleteHotel(id){
    this.apiService.deleteHotel(id).subscribe((hotel: Hotel)=>{
      console.log("Hotel deleted, ", hotel);
    });
  }
}
