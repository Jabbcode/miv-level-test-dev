import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styles: [`
    .contenedor { width: 50% }
    .nada { width: 0px }
    .full { width: 90% }
  `]
})
export class PhonesComponent implements OnInit {
  @ViewChild('formAddPhone') formAddPhone!: NgForm;

  constructor( private storeService: StoreService, private router: Router, private activatedRoute: ActivatedRoute) { }

  initForm = {
    mark: '',
    model: '',
    serialNumber: '',
    problem: '',
    client_id: 1
  }

  client: any = [];
  phones: any = [];
  forID: boolean = false;
  agregar: boolean = false;


  ngOnInit(): void { 
    
      if( !this.router.url.includes( '/store/phones/client' )) {
        this.storeService.getPhones()
          .subscribe( phones => {
            this.phones = phones
            
          })
      } else {
        this.activatedRoute.params
        .pipe( 
          switchMap( ({ id }) => this.storeService.getClientById(id) )
        )
        .subscribe( client => {
          this.client = client
        })

        this.activatedRoute.params
        .pipe( 
          switchMap( ({ id }) => this.storeService.getPhonesByClient(id) )
        )
        .subscribe( phones => {
          this.phones = phones
          this.forID = true
        })
      }
  }

  mostrarFormulario() {
    this.agregar = !this.agregar
  }

  agregarTelefono() {
    const { mark, model, serialNumber, problem, client_id } = this.formAddPhone.value
    this.storeService.agregarTelefono(mark, model, serialNumber, problem, client_id).subscribe( () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Telefono agregado!',
        showConfirmButton: false,
        timer: 2000
      })
    })

    this.formAddPhone.resetForm({
      mark: '',
      model: '',
      serialNumber: '',
      problem: '',
      client_id: 1
    });
  }

  getRepairsByPhone(id: number) {
    this.storeService.getPhonesByClient(id)
      .subscribe( phones => {
        this.router.navigate(['/store/repairs/phone', id ]);
      })
  }





}
