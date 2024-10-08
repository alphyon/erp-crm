import {Component} from '@angular/core';
import {NgbModal, NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {CreateRolesComponent} from "../create-roles/create-roles.component";
import {RolesService} from "../service/roles.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {EditRolesComponent} from "../edit-roles/edit-roles.component";
import {DeleteRolesComponent} from "../delete-roles/delete-roles.component";

@Component({
  selector: 'app-list-roles',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    AsyncPipe,
    NgIf,
    NgbPagination
  ],
  templateUrl: './list-roles.component.html',
  styleUrl: './list-roles.component.scss'
})
export class ListRolesComponent {
  search: string = '';
  roles: any = [];
  isLoading$: any;
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(
    public modalService: NgbModal,
    public rolesService: RolesService
  ) {


  }

  ngOnInit(): void {
    this.isLoading$ = this.rolesService.isLoading$;
    this.listRoles();
  }

  createRol() {
    const modalRef = this.modalService.open(CreateRolesComponent, {centered: true, size: "xl"});
    modalRef.componentInstance.RoleC.subscribe((role: any) => {
      this.roles.unshift(role);
    })
  }

  listRoles(page = 1) {
    this.rolesService.listRoles(page, this.search).subscribe((response: any) => {
      console.log(response)
      this.roles = response.roles
      this.totalPages = response.total
      this.currentPage = page
    })
  }

  loadPage($event: any) {
    this.listRoles($event);
  }

  editRole(rolEdit: any) {
    const modalRef = this.modalService.open(EditRolesComponent, {centered: true, size: "xl"});
    modalRef.componentInstance.RoleSelected = rolEdit;
    modalRef.componentInstance.RoleE.subscribe((role: any) => {
      let index = this.roles.findIndex((rol: any) => rol.id === rolEdit.id);
      if (index != -1) {
        this.roles[index] = role;
      }
    })
  }

  deleteRole(rolDelete: any) {
    const modalRef = this.modalService.open(DeleteRolesComponent, {centered: true, size: "md"});
    modalRef.componentInstance.RoleSelected = rolDelete;
    modalRef.componentInstance.RoleD.subscribe((role: any) => {
      let index = this.roles.findIndex((rol: any) => rol.id === rolDelete.id);
      if (index != -1) {
        this.roles.splice(index, 1);
      }
    })
  }
}
