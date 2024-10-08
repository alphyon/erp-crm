import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RolesService} from "../service/roles.service";
import {ToastrService} from "ngx-toastr";
import {HttpResponse} from "@angular/common/http";
import {SIDEBAR} from "../../../../config/config";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-delete-roles',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './delete-roles.component.html',
  styleUrl: './delete-roles.component.scss'
})
export class DeleteRolesComponent {
  @Output() RoleD: EventEmitter<any> = new EventEmitter();
  @Input() RoleSelected: any;
  name: string = '';
  isLoading: any;
  SIDEBAR: any = SIDEBAR;
  permissionsE: any = [];

  constructor(
    public modal: NgbActiveModal,
    public rolesService: RolesService,
    public toast: ToastrService,
  ) {
  }

  ngOnInit(): void {

  }

  delete() {

    this.rolesService.deleteRole(this.RoleSelected.id).subscribe({
      next: (response: any) => {
        this.toast.success("Éxito", response.body.message);
        this.RoleD.emit(response.body.role);
        this.modal.close();
      },
      error: (error: HttpResponse<any>) => {

        this.toast.error("Error", "Ha ocurrido un error");
        this.modal.close();

      },
    })

  }


}
