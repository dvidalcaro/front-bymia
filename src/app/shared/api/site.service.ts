import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Contactus} from "../interfaces/contactus";
import {environment} from "../../../environments/environment";
import {SocialLinksItem} from "../interfaces/social-network";

@Injectable({
    providedIn: 'root'
})
export class SiteService {
    constructor(
        private http: HttpClient,
    ) { }

    /**
     * Returns contactUS object
     */
    getContactUs(): Observable<Contactus> {
        return this.http.get<Contactus>(`${environment.apiUrl}/api/public/contact-us/data`);
    }

    /**
     * Return Term & Conditions
     */
    getTermsConditions(): Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}/api/public/terms-conditions`);
    }

    /**
     * Return About Us
     */
    getAboutUs(): Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}/api/public/about-us`);
    }

    /**
     * Return Social Network
     */
    getSocialNetworks(): Observable<SocialLinksItem[]>{
        return this.http.get<SocialLinksItem[]>(`${environment.apiUrl}/api/public/get-redes-sociales`);
    }
}
