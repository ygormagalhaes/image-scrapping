import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImagesService } from '../core/images.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    searchForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private service: ImagesService
    ) { }

    ngOnInit() {
        this.searchForm = this.fb.group({
            keyword: [
                '',
                [
                    Validators.required,
                    Validators.minLength(2)
                ]
            ]
        });
    }

    search() {
        this.service.searchImages(this.searchForm.get('keyword').value);
        this.searchForm.reset();
    }
}
