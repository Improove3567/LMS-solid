import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/loginpage/Loginpage';
import GroupPage from '../pages/groupPage/GroupPage';
import CreateMentor from '../pages/createMentorPage/CreateMentor';
import GroupsPage from '../pages/groupsPage/GroupsPage';

export interface RouteType {
  title: string;
  path: string;
  Component: React.FC;
}

export const adminRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: GroupsPage,
  },
  {
    title: 'Create Mentor Page',
    path: '/createMentor',
    Component: CreateMentor,
  },
  {
    title: 'Create Group',
    path: '/createGroup',
    Component: GroupPage,
  },
];

export const mentorRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
];

export const studentRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
];

export const notAuthRoutes: RouteType[] = [
  {
    title: 'Login Page',
    path: '/',
    Component: LoginPage,
  },
];
