import { Component, OnInit, ElementRef } from '@angular/core';
import {Historico} from './historico';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoricoService} from './historico.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';


declare var jQuery: any;

@Component({
  selector: 'mt-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico: Historico = new Historico();
  historicos: any;
  pagina: number;
  details: {};
  retorno: {};
  id: {number};
  inscricao: Subscription;



  constructor(
    private el:ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private historicoService: HistoricoService,
  ) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.modal').modal({});

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
      );

      this.historicos = this.getHistorico();

  }

  getHistorico() {
    this.historicoService.getHistorico().subscribe(data => {
      this.historicos = data;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


//abrirDetalhes(id){
 // let objeto = {
   // "id": id
//  }
  // this.equipamentService.getDetails(objeto).subscribe((res:Response) => this.details = res.json());
//}



}