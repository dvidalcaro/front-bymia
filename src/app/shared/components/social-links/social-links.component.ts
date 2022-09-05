import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import { theme } from '../../../../data/theme';
import {SiteService} from "../../api/site.service";
import {SocialLinksItem} from "../../interfaces/social-network";
import {map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {FormControl, Validators} from "@angular/forms";

export type SocialLinksShape = 'circle' | 'rounded';

@Component({
    selector: 'app-social-links',
    templateUrl: './social-links.component.html',
    styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    theme = theme;

    items: SocialLinksItem[] = [];

    @Input() shape: SocialLinksShape = 'circle';

    @HostBinding('class.social-links') classSocialLinks = true;

    @HostBinding('class.social-links--shape--circle') get classSocialLinksShapeCircle(): boolean { return this.shape === 'circle'; }

    @HostBinding('class.social-links--shape--rounded') get classSocialLinksShapeRounded(): boolean { return this.shape === 'rounded'; }

    constructor(private site: SiteService) {
    }

    ngOnInit(): void {

        this.site.getSocialNetworks().pipe(
            takeUntil(this.destroy$),
            map((cartItems:  SocialLinksItem[]) => cartItems.map((cartItem: SocialLinksItem) => {
                return {
                    type: cartItem.type.toLowerCase(),
                    url: cartItem.url,
                    icon: cartItem.icon
                };
            }))
        ).subscribe(items => this.items = items);

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
