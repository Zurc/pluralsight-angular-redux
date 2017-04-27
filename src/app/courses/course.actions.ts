import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState } from "../store";
import { Injectable } from "@angular/core";

//    define the type of the action
export const FILTER_COURSES = 'courses/FILTER';

@Injectable()
export class CourseActions {
    
    // inject our NgRedux store using angular dependency injection with our state matching our state interface
    constructor( private ngRedux: NgRedux<IAppState>) {}

    filterCourses (searchText: string) {
        this.ngRedux.dispatch({           // it will distpatch the action object
            type: FILTER_COURSES,         // with the type set to the constant
            searchText                    // and with the searchText on it
        })
    }
}
