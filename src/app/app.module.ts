import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserContainerComponent } from './user/pages/user-container/user-container.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailComponent } from './user/components/user-detail/user-detail.component';
import { UserSingleComponent } from './user/components/user-single/user-single.component';
import { OrderContainerComponent } from './order/pages/order-container.component';
import { OrderListComponent } from './order/components/order-list/order-list.component';
import { OrderSingleComponent } from './order/components/order-single/order-single.component';
import { OrderDetailComponent } from './order/components/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
