import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ClanOneComponent } from './clan-one/clan-one.component';
import { ClanTwoComponent } from './clan-two/clan-two.component';
import { ShopClansComponent } from './shop-clans/shop-clans.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    ClanOneComponent,
    ClanTwoComponent,
    ShopClansComponent,
    CartComponent,
    AccountComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
