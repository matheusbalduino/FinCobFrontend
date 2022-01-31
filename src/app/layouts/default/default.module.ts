import { NgModule } from "@angular/core";
import { DefaultComponent } from "./default.component";
import {CommonModule} from "@angular/common";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { DefaultRoutingModule } from "./Default.route";
import { SharedModule } from "src/app/shared/shared.module";

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { ConsultalotesComponent } from "src/app/modules/consultalotes/consultalotes.component";

@NgModule({
  declarations:[
    DefaultComponent,
    DashboardComponent,
    ConsultalotesComponent

  ],
  imports:[
    CommonModule,
    DefaultRoutingModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,

    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,

  ],
  providers:[],

})
export class DefaultModule{};
