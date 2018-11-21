import { Component, OnInit, ElementRef } from '@angular/core';
import {Profissionais} from './profissionais';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfissionaisService} from './profissionais.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';


declare var jQuery: any;

@Component({
  selector: 'mt-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {

  profissional: Profissionais = new Profissionais();
  profissionais: any;
  pagina: number;
  details: {};
  retorno: {};
  id: {number};
  inscricao: Subscription;



  constructor(
    private el:ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private profissionaisService: ProfissionaisService,
  ) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.modal').modal({});

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
      );

      this.profissionais = this.getProfissionais();

  }

  getProfissionais() {
    this.profissionaisService.getProfissionais().subscribe(data => {
      this.profissionais = data;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


abrirDetalhes(id){
 let objeto = {
 "id": id
  }
   this.profissionaisService.detalhes(objeto).subscribe((res:Response) => this.details = res.json());
}



}