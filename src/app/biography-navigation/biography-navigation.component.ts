import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-biography-navigation',
  templateUrl: './biography-navigation.component.html',
  styleUrls: ['./biography-navigation.component.css']
})
export class BiographyNavigationComponent implements OnInit {

  title = "Biography";
  name = 'Stanley Ho';

  constructor() { }

  ngOnInit() {
  }

}