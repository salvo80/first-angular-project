import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-Loader';
import {MaterialImports} from './material-imports/material-imports.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './dashboard/item-list/item-list.component';
import { ItemDetailComponent } from './dashboard/item-detail/item-detail.component';
import { ItemSearchComponent } from './dashboard/item-search/item-search.component';
import { AppRoutingModule } from './/app-routing.module';
import {UserService} from './user.service';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemSearchComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MaterialImports,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
