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
      name: 'Deep Learning Specialization',
      url: 'https://www.coursera.org/account/accomplishments/specialization/G8TS8APA3NK6'
    },
    {
      org: 'Coursera',
      name: 'TensorFlow in Practice Specialization',
      url: 'https://www.coursera.org/account/accomplishments/specialization/ACYMK9U2ARYZ'
    },
    {
      org: 'Nvidia Deep Learning Institute',
      name: 'Fundamentals of Deep Learning for Computer Vision',
      url: 'https://courses.nvidia.com/certificates/10618440429c46c0bc46c373f2da0508'
    },
    {
      org: 'Nvidia Deep Learning Institute',
      name: 'Fundamentals of Deep Learning for Multi-GPUs',
      url: 'https://courses.nvidia.com/certificates/dd09267473514e19b7a6a197992e90d8'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
