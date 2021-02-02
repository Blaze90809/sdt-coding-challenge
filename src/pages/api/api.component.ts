import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { document, user } from './../../models/users';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  documents: Array<document> = [];
  constructor(private api: ApiService) { }

  async ngOnInit() {
    const user = await this.api.getUsers();
    const documents = await this.api.getSubmittedDocument(user.oid);

    for (let doc of documents) {
      if (doc.caseParticipant) {
        doc.participant = await this.api.getParticipantById(doc.caseParticipant);
      }
      doc = new document(doc);
      doc.update()
    }
    this.documents = documents;
  }

}
