import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './Header/app-header'
import { ShoppingListComponent } from './Header/Shopping/shopping-list/shopping-list.component';
import { IngredientsComponent } from './Header/Shopping/ingredients/ingredients.component';
import { ReceipeListComponent } from './Header/Receipe/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './Header/Receipe/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './Header/Receipe/receipe-detail/receipe-detail.component';
import { ReceipeComponent } from './Header/Receipe/receipe/receipe.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    ShoppingListComponent,
    IngredientsComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
