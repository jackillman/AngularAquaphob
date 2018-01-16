import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMidComponent } from './header/header-mid/header-mid.component';
import { AttentionComponent } from './main/attention/attention.component';
import { HydrophobicComponent } from './main/hydrophobic/hydrophobic.component';
import { ProblemsComponent } from './main/problems/problems.component';
import { TheoryComponent } from './main/theory/theory.component';
import { PracticeComponent } from './main/practice/practice.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderMidComponent,
    AttentionComponent,
    HydrophobicComponent,
    ProblemsComponent,
    TheoryComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
