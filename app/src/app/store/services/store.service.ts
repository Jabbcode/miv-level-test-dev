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

  getClientById(id: number) {
    return this.http.get(this.baseUrl + `/api/clients/${id}`)
  }

  getPhones() {
    return this.http.get<Phone[]>(this.baseUrl + '/api/phones')
  }

  getPhoneById(id: number) {
    return this.http.get(this.baseUrl + `/api/phones/${id}`)
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

  agregarCliente(firstName: string, lastName: string, phoneNumber: string, email: string) {
    return this.http.post(this.baseUrl + '/api/clients', {
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
      "email": email
    })
  }

  agregarTelefono(mark: string, model: string, serialNumber: string, problem: string, client_id: number) {
    return this.http.post(this.baseUrl + '/api/phones', {
      "mark": mark,
      "model": model,
      "serialNumber": serialNumber,
      "problem": problem,
      'client_id': client_id
    })
  }

  agregarReparacion(solution: string, price: string, date: Date, phone_id: number) {
    return this.http.post(this.baseUrl + '/api/repairs', {
      "solution": solution,
      "price": price,
      "date": date,
      "phone_id": phone_id
    })
  }
}
