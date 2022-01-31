import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsultalotesComponent } from "src/app/modules/consultalotes/consultalotes.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { DefaultComponent } from "./default.component";

const defaultRouterConfig: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {
    path:'', component:DefaultComponent,
    children:[
      {path:'dashboard',  component: DashboardComponent    },
      {path:'lotes',  component: ConsultalotesComponent    }

    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(defaultRouterConfig)
  ],
  exports:[RouterModule]
})
export class DefaultRoutingModule { };
