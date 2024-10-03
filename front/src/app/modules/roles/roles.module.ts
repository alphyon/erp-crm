import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RolesRoutingModule} from './roles-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModalModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {InlineSVGModule} from "ng-inline-svg-2";
import {CreateRolesComponent} from "./create-roles/create-roles.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
    NgbPaginationModule,
    CreateRolesComponent,
  ]
})
export class RolesModule {
}
