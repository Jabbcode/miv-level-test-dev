import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styles: []
})
export class RepairsComponent implements OnInit {

  constructor( 
    private storeService: StoreService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute 
  ) { }

  repairs: any = [];
  forID: boolean = false;

  ngOnInit(): void {
    if( !this.router.url.includes( 'store/repairs/phone' )) {
      this.storeService.getRepairs()
        .subscribe( repairs => {
          this.repairs = repairs
          
        })
    } else {
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

  phone(id: string) {

  }

}
