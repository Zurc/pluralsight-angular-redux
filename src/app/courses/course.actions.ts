import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState } from "../store";
import { Injectable } from "@angular/core";
import { CourseService } from "./course.service";

//    define the type of the action
export const FILTER_COURSES = 'courses/FILTER';
export const REQUEST_COURSES_SUCCESS = 'courses/REQUEST_COURSES_SUCCESS';

@Injectable()
export class CourseActions {
    
    
    constructor( 
        // inject our NgRedux store using angular dependency injection with our state matching our state interface
        private ngRedux: NgRedux<IAppState>,
        // inject our course service
        private courseService: CourseService
    ) {}

    getCourses() {
        this.courseService.getCourses()
            .subscribe( courses => {
                this.ngRedux.dispatch({
                    type: REQUEST_COURSES_SUCCESS,
                    courses
                })
            })
    }

    filterCourses (searchText: string) {
        this.ngRedux.dispatch({           // it will distpatch the action object
            type: FILTER_COURSES,         // with the type set to the constant
            searchText                    // and with the searchText on it
        })
    }
}
