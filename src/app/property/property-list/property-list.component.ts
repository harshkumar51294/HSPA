import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  SellRent :number = 1;
  constructor(private route :ActivatedRoute , private housingservice :HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
  }

  this.housingservice.getAllproperties(this.SellRent).subscribe(
      data => {
          this.properties = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );


}
}
