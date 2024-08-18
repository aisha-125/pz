import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { HeaderComponent } from './components/header/header/header.component';
import { ProductsListComponent } from './components/productsList/products-list/products-list.component';
import { ProductsMenuComponent } from './views/products-menu/products-menu/products-menu.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './views/home/home/home.component';
import { AuthComponent } from './views/auth/auth/auth.component';
import { LoginComponent } from './components/login/login/login.component';
import { SingupComponent } from './components/singup/singup/singup.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContactComponent } from './views/contact/contact.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BtnSubmitOrderComponent } from './components/btn-submit-order/btn-submit-order.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductsMenuComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    SingupComponent,
    SearchBarComponent,
    ContactComponent,
    NavMenuComponent,
    BtnSubmitOrderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
