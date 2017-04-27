import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourses } from "../store";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  filteredCourses = [];

  constructor(private _courseService: CourseService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    // call dispatch on the store and pass the results of calling the filterCourse action creator
    store.dispatch(filterCourses(searchText));
  }

  updateFromState() {
    const allState = store.getState();  // get state from store
    // this.courses = allState.courses;  // assign (bind) state courses to courses variable
    this.filteredCourses = allState.filteredCourses;  //  bind state filtered courses from state
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
