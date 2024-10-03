import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {SIDEBAR} from "../../../../config/config";

@Component({
  selector: 'app-create-roles',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './create-roles.component.html',
  styleUrl: './create-roles.component.scss'
})
export class CreateRolesComponent {
  name: string = '';
  isLoading: any;
  SIDEBAR: any = SIDEBAR

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {

  }

  store() {

  }
}
