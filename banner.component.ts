
import { Component } from '@angular/core';
import { CmsBannerComponent, CmsComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(protected component: CmsComponentData<CmsBannerComponent>) {}

  //data$: Observable<CmsBannerComponent> = this.component.data$;

  items: number[] = [];

 ngOnInit() {
   for (let i = 0; i < 10000000000; i++) {
     this.items.push(i);
   }
 }
}
