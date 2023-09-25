import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailForwarderService {

  private formData: FormData

  constructor(private http: HttpClient) {}

  sendEmail(url: string, data: any) {
    return this.http.post(url, data);
  }

}

