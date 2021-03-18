import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import Top from './top';
import SignUp from './register';
import Nav from './nav';
import course from './AddCourses';
import AddCourses from './AddCourses';



/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route>

    <Route path="/user" component={Top} />
    <Route path="/register" component={SignUp} />
    <Route path="/" component={Nav} />
    <Route path="/" component={AddCourses}/>
  </Route>
);