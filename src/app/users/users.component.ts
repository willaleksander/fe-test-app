import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '../model/Page';

import { ColumnMode } from '@swimlane/ngx-datatable';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { StatusService } from '../services/status.service';
import { Status } from '../model/status';
import { GlobalConstrants } from '../common/global-constrants';

  /** 
  User page, responsible for listing all users with pagination.
  */
@Component({
  selector: 'exads-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  page = new Page();
  users = new Array<User>();
  statuses = new Array<Status>();

  spinner = false;

  ColumnMode = ColumnMode;

  //page sizes
  sizes = [10, 20, 30, 50, 100];

  gc = GlobalConstrants;

  constructor(
    private userService: UserService, 
    private statusService: StatusService,
    private router: Router
    ) {
      this.page.pageNumber = 0;
      this.page.size = 20;
   }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
   setPage(pageInfo) {
    this.spinner = true;
    this.page.pageNumber = pageInfo.offset;
    this.statusService.findAll().subscribe(data => {
      this.statuses = data.data;
      this.userService.findByPage(this.page).subscribe(data => {
        this.page.totalElements = data.data.count;
        this.page.totalPages = Math.ceil(this.page.totalElements/this.page.size);
        this.users = data.data.users;
        this.spinner = false;
      });
    });
  }

  /**
   * returns the respective class to color the user status
   */
  getCellClass({ row, column, value }): any {
    if (value == 1) return ' is-active ';
    if (value == 3) return ' is-inactive ';
  }

  /**
   * 
   * @param statusId 
   * @returns the status description related to each user
   */
  getCellStatus(statusId: number) {
    var statusDescription;
    this.statuses.forEach(function(status) {
      if (statusId == status.id)
        statusDescription = status.description;
    });
    return statusDescription;
  }

  /**
   * re-build the screen after changing the page size and bring back to first page
   */
  onPageSizeChange() {
    this.setPage({offset: 0});
  }

  /**
   * click to navigate to create user page
   */
  onCreateUserClick() {
    this.router.navigate([this.gc.users_endpoint + this.gc.createuser_endpoint]);
  }
}
