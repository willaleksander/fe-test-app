import { Component, OnInit } from '@angular/core';
import { Page } from '../model/Page';

import { ColumnMode } from '@swimlane/ngx-datatable';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { StatusService } from '../services/status.service';
import { Status } from '../model/status';

interface PageInfo {
  offset: number;
  pageSize: number;
  limit: number;
  count: number;
}
@Component({
  selector: 'exads-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  page = new Page();
  users = new Array<User>();
  statuses = new Array<Status>();

  ColumnMode = ColumnMode;

  sizes = [10, 20, 30, 50, 100];

  constructor(private userService: UserService, private statusService: StatusService) {
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
    this.page.pageNumber = pageInfo.offset;
    this.statusService.findAll().subscribe(data => {
      this.statuses = data.data;
      this.userService.findByPage(this.page).subscribe(data => {
        this.page.totalElements = data.data.count;
        this.page.totalPages = Math.ceil(this.page.totalElements/this.page.size);
        this.users = data.data.users;
      });
    });
  }

  getCellClass({ row, column, value }): any {
    if (value == 1) return ' is-active ';
    if (value == 3) return ' is-inactive ';
  }

  getCellStatus(statusId: number) {
    var statusDescription;
    this.statuses.forEach(function(status) {
      if (statusId == status.id)
        statusDescription = status.description;
    });
    return statusDescription;
  }

  onPageChange(pc) {
    this.page.size = pc.value;
    this.setPage({offset: 0});
  }
}
