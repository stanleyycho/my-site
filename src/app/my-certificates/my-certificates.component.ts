import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate';

@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent implements OnInit {

  certs: Certificate[] = [
    {
      org: 'Coursera',
      name: 'Self-Driving Cars Specialization',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RYQDK344QS3P'
    },
    {
      org: 'Coursera',
      name: 'Deep Learning Specialization',
      url: 'https://www.coursera.org/account/accomplishments/specialization/G8TS8APA3NK6'
    },
    {
      org: 'Coursera',
      name: 'DeepLearning.AI TensorFlow Developer Specialization',
      url: 'https://www.coursera.org/account/accomplishments/specialization/ACYMK9U2ARYZ'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
