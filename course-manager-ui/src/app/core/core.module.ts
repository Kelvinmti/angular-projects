import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error-404/error-404.component';

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      { // indica que é uma rota desconhecida e redireciona para pagina de erro
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {

}
