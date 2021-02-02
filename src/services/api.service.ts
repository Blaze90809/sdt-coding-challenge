import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user, document } from './../models/users'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://sdtcodingchallenge.azurewebsites.net/api'
  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<user> {
    // Returns a singe user object of the current user.
    return this.httpClient.get<user>(`${this.url}/GetUser`).toPromise();
  }
  async getSubmittedDocument(GUID: string): Promise<document[]> {
    // Returns a collection of documents submitted by a user.
    return this.httpClient.get<document[]>(`${this.url}/GetSubmittedDocumentByUser?id=${GUID}`).toPromise();
  }
}
