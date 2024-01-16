import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContentComponent } from './card-content/card-content.component';
import { BootstrapItemsComponent } from './bootstrap-items/bootstrap-items.component';
@NgModule({
  declarations: [AppComponent, CardContentComponent, BootstrapItemsComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
