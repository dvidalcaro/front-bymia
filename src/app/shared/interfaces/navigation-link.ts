import { Link } from './link';
import { Menu } from './menu';
import { Megamenu } from './megamenu';
import {Category} from "./category";

export interface NavigationLink extends Link {
    menu?: Menu|Megamenu;
}

export class Navigation implements NavigationLink {

    label: string;
    url: string;
    menu?: Menu | Megamenu;
    target?: "_self" | "_blank";
    external?: boolean;

    constructor(label: string, url: string, children: Category[] | null | undefined) {
        this.label = label;
        this.url = url;

        let items = []
        if(children){
            for (let i = 0; i < children.length; i++) {
                items.push({label: children[i].name, url: '/shop/catalog'})
            }
        }
        this.menu = {
            type: 'menu',
            items: items
        }
    }
}
