import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';
import { store } from "../store/store";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  filteredCourses = this.courses;

  constructor(private _courseService: CourseService, private _filterService: FilterService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
  }

  // getCourses() {
  //   this._courseService.getCourses()
  //     .subscribe(courses => {
  //       this.courses = this.filteredCourses = courses;
  //     });
  // }

  updateFromState() {
    const allState = store.getState();  // get state from store
    this.courses = allState.courses;  // assign (bind) state courses to courses variable
    this.filteredCourses = allState.courses;  //  bind state filtered courses from state
  }

  ngOnInit() {
    this.updateFromState();    // bind the component to initial state
    //  bind the component to updated state when store changes
    store.subscribe(() => {    
      this.updateFromState();
    })
    componentHandler.upgradeDom();
  }
}
