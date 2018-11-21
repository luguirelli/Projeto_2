import { Component, OnInit, ElementRef } from '@angular/core';
import {EquipamentoAlerta} from './equipamento-alerta';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoAlertaService } from './equipamento-alerta.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';


declare var jQuery: any;

@Component({
  selector: 'mt-equipamentos-alerta',
  templateUrl: './equipamentos-alerta.component.html',
  styleUrls: ['./equipamentos-alerta.component.css']
})
export class EquipamentosAlertaComponent implements OnInit {

  equipamentoAlerta: EquipamentoAlerta = new EquipamentoAlerta();
  equipamentosAlerta: any;
  pagina: number;
  details: {};
  retorno: {};
  id: {number};
  inscricao: Subscription;



  constructor(
    private el:ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private equipamentoAlertaService: EquipamentoAlertaService,
  ) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.modal').modal({});

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
      );

      this.equipamentosAlerta = this.getErros();

  }

  getErros() {
    this.equipamentoAlertaService.getErros().subscribe(data => {
      this.equipamentosAlerta = data;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}