import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styles: []
})
export class PhonesComponent implements OnInit {

  constructor( private storeService: StoreService, private router: Router, private activatedRoute: ActivatedRoute) { }

  phones: any = [];
  forID: boolean = false;

  ngOnInit(): void { 
    

      if( !this.router.url.includes( '/store/phones/client' )) {
        this.storeService.getPhones()
          .subscribe( phones => {
            this.phones = phones
            
          })
      } else {
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

  getRepairsByPhone(id: number) {
    this.storeService.getPhonesByClient(id)
      .subscribe( phones => {
        this.router.navigate(['/store/repairs/phone', id ]);
      })
  }



}
