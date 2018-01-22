import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ClanOneComponent }   from './clan-one/clan-one.component';
import { ClanTwoComponent }   from './clan-two/clan-two.component';
import { ShopClansComponent }   from './shop-clans/shop-clans.component';
import { AccountComponent }   from './account/account.component';
import { WelcomeComponent }   from './welcome/welcome.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'cart-component',
    component: CartComponent
  },
  {
     path: 'clan-one',
     component: ClanOneComponent
   },
  {
    path: 'clan-two',
    component: ClanTwoComponent
  },
  {
    path: 'shop-clan',
    component: ShopClansComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
