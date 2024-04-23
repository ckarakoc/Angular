import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common"; // need to be imported in standalone
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../interfaces/housinglocation";
import { HousingService } from "../services/housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, RouterLink, FormsModule],
  template: `
    <section>
      <form (ngSubmit)="filterResults(filter.value)">
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }


  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(houseLoc => houseLoc?.city.toLowerCase().includes(text.toLowerCase()));
    console.log(this.filteredLocationList);
  }
}
