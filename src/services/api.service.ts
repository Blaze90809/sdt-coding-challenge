import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Document, Participant } from './../models/users'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://sdtcodingchallenge.azurewebsites.net/api'
  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<User> {
    // Returns a singe user object of the current user.
    return this.httpClient.get<User>(`${this.url}/GetUser`).toPromise();
  }
  async getSubmittedDocument(GUID: string): Promise<Document[]> {
    // Returns a collection of documents submitted by a user.
    const response = await this.httpClient.get<Document[]>(`${this.url}/GetSubmittedDocumentByUser?id=${GUID}`).toPromise();
    return response.map(x => new Document(x))
  }
  async getParticipantById(id: number): Promise<Participant> {
    // Returns the participant object
    return this.httpClient.get<Participant>(`${this.url}/GetParticipantById?id=${id}`).toPromise();
  }
}
