import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../core/images.service';

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
    actualImage: string;

    constructor(private imageService: ImagesService) { }

    ngOnInit(): void {
        this.imageService.getImages().subscribe(images => {
            let i = 0;
            setInterval(() => {
                if (i < images.length) {
                    this.actualImage = images[i++];
                } else {
                    i = 0;
                }
            }, 100);
        });
    }

}
