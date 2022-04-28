import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderContainerComponent } from "./order/pages/order-container.component";
import { UserContainerComponent } from "./user/pages/user-container/user-container.component";

const ROUTES: Routes = [
    { path:'users', component: UserContainerComponent },
    { path:'order', component: OrderContainerComponent },
    { path:'', redirectTo:'users', pathMatch: 'full' },
    { path:'**', component: NotFoundComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}