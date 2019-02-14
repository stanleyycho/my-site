import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate'

@Component({
  selector: 'app-my-certificates',
  templateUrl: './my-certificates.component.html',
  styleUrls: ['./my-certificates.component.css']
})
export class MyCertificatesComponent implements OnInit {

  certs : Certificate[] = [
    {org: "Nvidia Deep Learning Institute", name: "Fundamentals of Deep Learning for Computer Vision", url:"https://courses.nvidia.com/certificates/2ccc14d1bf9746a1ab360a48b94e4af3"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
