import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private _HttpClient: HttpClient) { }

  getNavbarMenu(): Observable<any> {
    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/menu/view.php`);
  }

  getNavbarButton(): Observable<any> {

    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/menu/btn.php`);
  }

  getFooterLowerText(): Observable<any> {
    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/footer/view.php`);
  }
  getFooterContactInfo(): Observable<any> {
    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/contact/view.php`);
  }
  getFooterPages(): Observable<any> {
    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/footer/pages.php`);
  }
  getFooterAbove(): Observable<any> {
    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/footer/upsection.php`);
  }

  getFooterContact(): Observable<any> {
    return this._HttpClient.get(`https://tdawl.quickly-egypt.com/api/v1/footer/otherpage.php`);
  }

}
