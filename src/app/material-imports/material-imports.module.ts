import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [ FlexLayoutModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule],
  exports: [ FlexLayoutModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule],
})
export class MaterialImports {}
