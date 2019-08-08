import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ImagesService {
    images = new Subject<string[]>();

    constructor(private httpClient: HttpClient) { }

    getImages() {
        return this.images.asObservable();
    }

    searchImages(keyword: string) {
        const params = new HttpParams();
        this.httpClient.get(environment.api, { params: { keyword } }).subscribe((data: any) => {
            this.images.next(data.data);
        });
    }
}
