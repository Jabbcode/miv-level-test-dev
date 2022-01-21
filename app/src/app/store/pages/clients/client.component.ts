import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

interface Phone {
  solution: string,
  price: number,
  date: Date,
  phone_id: number
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [
  ]
})
export class ClientComponent implements OnInit {

  constructor( private storeService: StoreService, private router: Router, ) { }

  clients: any = []
  phones: Phone[] = []

  ngOnInit(): void { 
    this.storeService.getClients()
      .subscribe( clients => {
        this.clients = clients
      })
  }

  getPhonesByClient(id: number) {
    this.storeService.getPhonesByClient(id)
      .subscribe( phones => {
        this.router.navigate(['/store/phones/client', id ]);
      })
  }
}
