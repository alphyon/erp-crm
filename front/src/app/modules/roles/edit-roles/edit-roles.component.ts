import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RolesService} from "../service/roles.service";
import {ToastrService} from "ngx-toastr";
import {HttpResponse} from "@angular/common/http";
import {SIDEBAR} from "../../../../config/config";

@Component({
  selector: 'app-edit-roles',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-roles.component.html',
  styleUrl: './edit-roles.component.scss'
})
export class EditRolesComponent {
  @Output() RoleE: EventEmitter<any> = new EventEmitter();
  @Input() RoleSelected: any;
  name: string = '';
  isLoading: any;
  SIDEBAR: any = SIDEBAR;
  permissionsE: any = [];
  permissions: any = [];

  constructor(
    public modal: NgbActiveModal,
    public rolesService: RolesService,
    public toast: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.name = this.RoleSelected.name;
    this.permissionsE = this.RoleSelected.permission_pluck;
    this.permissions = this.permissionsE;
  }

  edit() {
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
    this.rolesService.updateRole(this.RoleSelected.id, data).subscribe({
      next: (response: any) => {
        this.toast.success("Éxito", response.body.message);
        this.RoleE.emit(response.body.role);
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
    let index = this.permissions.findIndex((perm: string) => {
      return permission === perm
    });
    console.log(index)
    if (index != -1) {
      this.permissions.splice(index, 1);
    } else {
      this.permissions.push(permission)
    }
  }
}
