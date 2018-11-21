import { Component, OnInit, ElementRef } from '@angular/core';
import {Preventivas} from './preventivas';
import { ActivatedRoute, Router } from '@angular/router';
import { PreventivasService} from './preventivas.service';
import { Subscription } from 'rxjs/Subscription';

declare var jQuery: any;
@Component({
  selector: 'mt-preventivas',
  templateUrl: './preventivas.component.html',
  styleUrls: ['./preventivas.component.css']
})

export class PreventivasComponent implements OnInit {

  preventiva: Preventivas = new Preventivas();
  preventivas: any;
  pagina: number;
  details: {};
  retorno: {};
  id: {number};
  inscricao: Subscription;


  constructor(private el:ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private preventivasService: PreventivasService,) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.modal').modal({});

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
      );

      this.preventivas = this.getNextPreventive();
  }

  getNextPreventive() {
    this.preventivasService.getNextPreventive().subscribe(data => {
      this.preventivas = data;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

