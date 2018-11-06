import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossa-historia',
  templateUrl: './nossa-historia.component.html',
  styleUrls: ['./nossa-historia.component.css']
})
export class NossaHistoriaComponent implements OnInit {

  address: string = '../../../assets/images/crianças_Shalom.png';
  
  constructor( ) { }

  ngOnInit() { }

}
