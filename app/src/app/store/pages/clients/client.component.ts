import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

interface Phone {
  solution: string,
  price: number,
  date: Date,
  phone_id: number
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [`
    .contenedor { width: 50% }
    .nada { width: 0px }
    .full { width: 90% }
  `]
})
export class ClientComponent implements OnInit {
  @ViewChild('formAddClient') formAddClient!: NgForm;

  constructor( private storeService: StoreService, private router: Router, ) { }

  initForm = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  }

  clients: any = []
  phones: Phone[] = []
  agregar: boolean = false;

  ngOnInit(): void { 
    this.storeService.getClients()
      .subscribe( clients => {
        this.clients = clients
      })
  }

  mostrarFormulario() {
    this.agregar = !this.agregar
  }

  getPhonesByClient(id: number) {
    this.storeService.getPhonesByClient(id)
      .subscribe( phones => {
        this.router.navigate(['/store/phones/client', id ]);
      })
  }

  agregarCliente() {
    const { firstName, lastName, phoneNumber, email } = this.formAddClient.value
    this.storeService.agregarCliente(firstName, lastName, phoneNumber, email).subscribe( () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cliente agregado!',
        showConfirmButton: false,
        timer: 2000
      })
    })

    this.formAddClient.resetForm({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    });
  }
}
