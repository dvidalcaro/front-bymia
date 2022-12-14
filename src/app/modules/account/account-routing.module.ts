import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageLoginComponent} from './pages/page-login/page-login.component';
import {LayoutComponent} from './components/layout/layout.component';
import {PageDashboardComponent} from './pages/page-dashboard/page-dashboard.component';
import {PageOrdersListComponent} from './pages/page-orders-list/page-orders-list.component';
import {PageAddressesListComponent} from './pages/page-addresses-list/page-addresses-list.component';
import {PageOrderDetailsComponent} from './pages/page-order-details/page-order-details.component';
import {PageEditAddressComponent} from './pages/page-edit-address/page-edit-address.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: PageDashboardComponent
            },
            {
                path: 'addresses',
                component: PageAddressesListComponent
            },
            {
                path: 'addresses/:addressId',
                component: PageEditAddressComponent
            },
            {
                path: 'orders',
                component: PageOrdersListComponent
            },
            {
                path: 'orders/:orderId',
                component: PageOrderDetailsComponent
            }
        ]
    },
    {
        path: 'login',
        component: PageLoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
}
