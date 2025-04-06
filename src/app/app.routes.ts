import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { DecisionComponent } from './decision/decision.component';
import { BudgetComponent } from './budget/budget.component';

export const routes: Routes = [

    {
        path: `home`,
        component: HomeComponent,
        title: `Home Page`,
    },
    {
        path: `todo`,
        component: TodoComponent,
        title: `Todo List`,
    },
    {
        path: `decision`,
        component: DecisionComponent,
        title: `Decision Maker,`
    },
    {
        path: ``,
        redirectTo: `/home`, pathMatch: `full`
    },
    {
        path: `budget`,
        component: BudgetComponent,
        title: `Budget App`
    }

];

export default routes;
