import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { user } from './../../models/users';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  // user: user
  constructor(private api: ApiService) { }

  async ngOnInit() {
    const user = await this.api.getUsers();
    const documents = await this.api.getSubmittedDocument(user.oid);
    console.log(documents)
  }

}
