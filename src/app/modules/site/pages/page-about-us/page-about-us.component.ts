import {Component, OnDestroy, OnInit} from '@angular/core';
import {SiteService} from "../../../../shared/api/site.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
    selector: 'app-about-us',
    templateUrl: './page-about-us.component.html',
    styleUrls: ['./page-about-us.component.scss']
})
export class PageAboutUsComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    aboutUs: any = '';

    constructor(
        private site: SiteService
    ) {
    }

    ngOnInit(): void {

        this.site.getTermsConditions().pipe(
            takeUntil(this.destroy$),
        ).subscribe(aboutUs => this.aboutUs = aboutUs);

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
