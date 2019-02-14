import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  about_me = "I'm Stanley, an engineer interested in image processing and software engineering. At <a href=\"https://www.roche.com/\">Roche</a>, I'm building platform and algorithms for pathology image analysis. <br> Currently, I'm learning deep learning (DL) in order to increase image analysis accuracy and building DL data pipeline. <br> <br> In my own time I enjoy learning new things, including technology, and exploring National Parks."

  constructor() { }

  ngOnInit() {
  }

}
