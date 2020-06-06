import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
//import { HTTP } from '@ionic-native/http/ngx'; // for android only
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //HomePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    //GoogleMapsModule,
    HttpClientModule,
    //HTTP
  ],
  declarations: [HomePage]
})
export class HomePageModule { }