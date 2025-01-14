import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/start.module';
import { AppPipeModule } from '../shared/pipe/app.pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent // configura rota de cursos
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent // configura rota de cursos
      },
    ])
  ]
})
export class CourseModule {

}
