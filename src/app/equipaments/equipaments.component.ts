import { Component, OnInit, ElementRef } from '@angular/core';
import {Equipament} from './equipament';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentService } from './equipament.service';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';


declare var jQuery: any;

@Component({
  selector: 'mt-equipaments',
  templateUrl: './equipaments.component.html',
  styleUrls: ['./equipaments.component.css']
})
export class EquipamentsComponent implements OnInit {

  equipamento: Equipament = new Equipament();
  equipamentos: any;
  pagina: number;
  details: {};
  retorno: {};
  id: {number};
  inscricao: Subscription;



  constructor(
    private el:ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private equipamentService: EquipamentService,
  ) { }

  ngOnInit() {
    jQuery(this.el.nativeElement).find('.modal').modal({});

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
      );

      this.equipamentos = this.getEquipamentos();

  }

  getEquipamentos() {
    this.equipamentService.getEquipaments().subscribe(data => {
      this.equipamentos = data;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


abrirDetalhes(id){
 let objeto = {
   "id": id
  }
   this.equipamentService.getDetails(objeto).subscribe((res:Response) => this.details = res.json());
}

  deletarEquipamento(id) {
  let object = {
   "id": id
  } 
  this.equipamentService.deletarEquipamento(object).subscribe((res: Response) => this.details = res.json());
}

}
