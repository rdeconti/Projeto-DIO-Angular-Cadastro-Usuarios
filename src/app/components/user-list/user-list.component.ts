import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { UserFormDialogComponent } from '../user-form-dialog/user-form-dialog.component';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['nome', 'idade', 'email principal', 'email alternativo', 'cargo'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  public columnsFilters = {};

  public dataSource: MatTableDataSource<User>;
  private serviceSubscribe: Subscription;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<User>();
  }

  private filter() {

    this.dataSource.filterPredicate = (data: User, filter: string) => {
      let find = true;

      for (var columnName in this.columnsFilters) {

        let currentData = "" + data[columnName];

        if (!this.columnsFilters[columnName]) {
          return;
        }

        let searchValue = this.columnsFilters[columnName]["contains"];

        if (!!searchValue && currentData.indexOf("" + searchValue) < 0) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["equals"];

        if (!!searchValue && currentData != searchValue) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["greaterThan"];

        if (!!searchValue && currentData <= searchValue) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["lessThan"];

        if (!!searchValue && currentData >= searchValue) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["startWith"];

        if (!!searchValue && !currentData.startsWith("" + searchValue)) {
          find = false;
          return;
        }

        searchValue = this.columnsFilters[columnName]["endWith"];

        if (!!searchValue && !currentData.endsWith("" + searchValue)) {
          find = false;
          return;
        }

      }

      return find;
    };

    this.dataSource.filter = null;
    this.dataSource.filter = 'activate';

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(columnName: string, operationType: string, searchValue: string) {

    this.columnsFilters[columnName] = {};
    this.columnsFilters[columnName][operationType] = searchValue;
    this.filter();
  }

  clearFilter(columnName: string) {

    if (this.columnsFilters[columnName]) {
      delete this.columnsFilters[columnName];
      this.filter();
    }
  }

  add() {

    let user = new User();

    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.add(result);
      }
    });
  }

  edit(data: User) {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.edit(result);
      }
    });
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.remove(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.userService.getAll();
    this.serviceSubscribe = this.userService.users$.subscribe(res => {
      this.dataSource.data = res;
    })
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }

}
