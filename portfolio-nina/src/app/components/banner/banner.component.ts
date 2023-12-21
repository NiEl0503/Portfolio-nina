import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = "Ninoska Contreras";
  urlImg: string = "../../../assets/img/banner.png";
  photo: string = `url('${this.urlImg}')`;
}
