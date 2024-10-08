import {Component, EventEmitter, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {SIDEBAR} from "../../../../config/config";
import {RolesService} from "../service/roles.service";
import {ToastrService} from "ngx-toastr";
import {HttpResponse} from "@angular/common/http";

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
  @Output() RoleC: EventEmitter<any> = new EventEmitter();
  name: string = '';
  isLoading: any;
  SIDEBAR: any = SIDEBAR;
  permissions: any = [];

  constructor(
    public modal: NgbActiveModal,
    public rolesService: RolesService,
    public toast: ToastrService,
  ) {
  }

  ngOnInit(): void {

  }

  store() {
    if (!this.name) {
      this.toast.warning("Validation", "Name is required");
      return false;
    }

    if (this.permissions.length == 0) {
      this.toast.warning("Validation", "You need select one permission");
      return false;
    }
    let data = {
      name: this.name,
      permissions: this.permissions,
    }
    this.rolesService.registerRole(data).subscribe({
      next: (response: any) => {
        this.toast.success("Éxito", response.body.message);
        this.RoleC.emit(response.body.role);
        this.modal.close();
      },
      error: (error: HttpResponse<any>) => {
        if (error.status === 422) {
          this.toast.error("Error", "Ya existe el rol");
          this.modal.close();
        }
      },
    })

  }

  addPermission(permission: string) {
    let index = this.permissions.findIndex((perm: string) => permission == perm);

    if (index != -1) {
      this.permissions.slice(index, 1);
    } else {
      this.permissions.push(permission)
    }
  }
}
