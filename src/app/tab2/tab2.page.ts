import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page {

  slideOpts: any = '';

  constructor() {
    this.slideOpts = {
      slidesPerView:3.1,
      freemode:"true",
      spaceBetween:-10,
      direction: "horizontal"
  }

  
}
}