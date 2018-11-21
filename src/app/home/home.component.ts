import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'fa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private el:ElementRef
  ) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.carousel').carousel({});
  }

}
