import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{path:'',component:Child1Component},{path:'paul',component:Child1Component,children:[{path:'tony',component:Child3Component}]},
    {path:'samuel',component:Child2Component,children:[{path:'nitla',component:Child4Component}]},
    {path:'**',component:PageNotFoundComponent}])
  ],
  exports: [RouterModule]
})
export class RouteModule { }
