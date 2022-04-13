import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UsersListComponent } from './components/users-list/users-list.component';

// defining route paths and components
const routes: Routes = [
  { path: '', component: UsersListComponent },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'user/:id/posts',
    component: UserPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
