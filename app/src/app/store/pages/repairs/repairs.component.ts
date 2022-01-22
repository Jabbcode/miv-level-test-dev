import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styles: [`
    .contenedor { width: 50% }
    .nada { width: 0px }
    .full { width: 90% }
  `]
})
export class RepairsComponent implements OnInit {
  @ViewChild('formAddRepair') formAddRepair!: NgForm;


  constructor( 
    private storeService: StoreService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute 
  ) { }

  initForm = {
    solution: '',
    price: 0,
    date: '',
    phone_id: 1
  }

  phone: any = [];
  repairs: any = [];
  forID: boolean = false;
  agregar: boolean = false;


  ngOnInit(): void {
    if( !this.router.url.includes( 'store/repairs/phone' )) {
      this.storeService.getRepairs()
        .subscribe( repairs => {
          this.repairs = repairs
          
        })
    } else {
      this.activatedRoute.params
        .pipe( 
          switchMap( ({ id }) => this.storeService.getPhoneById(id) )
        )
        .subscribe( phone => {
          this.phone = phone
          console.log(phone);
        })

      this.activatedRoute.params
      .pipe( 
        switchMap( ({ id }) => this.storeService.getReapirsByPhone(id) ) 
      )
      .subscribe( repairs => {
        this.repairs = repairs
        this.forID = true
      })
    }
  }

  mostrarFormulario() {
    this.agregar = !this.agregar
  }

  agregarReparacion() {
    const { solution, price, date, phone_id } = this.formAddRepair.value
    this.storeService.agregarReparacion(solution, price, date, phone_id).subscribe( () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Reparacion agregada!',
        showConfirmButton: false,
        timer: 2000
      })
    })

    this.formAddRepair.resetForm({
      solution: '',
      price: 0,
      date: '',
      phone_id: 1
    });
  }


}
