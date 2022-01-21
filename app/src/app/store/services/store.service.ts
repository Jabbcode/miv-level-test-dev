import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface Phone {
  mark: string,
  model: string,
  serialNumber: string,
  problem: string,
  client_id: number
}

interface Repair {
  solution: string,
  price: number,
  date: Date,
  phone_id: number
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(this.baseUrl + '/api/clients')
  }

  getPhones() {
    return this.http.get<Phone[]>(this.baseUrl + '/api/phones')
  }

  getPhonesByClient(id: number) {
    return this.http.get<Phone[]>(this.baseUrl + `/api/phones/client/${id}`)
  }

  getRepairs() {
    return this.http.get<Repair[]>(this.baseUrl + '/api/repairs')
  }

  getReapirsByPhone(id: number) {
    return this.http.get<Repair[]>(this.baseUrl + `/api/repairs/phone/${id}`)
  }
}
