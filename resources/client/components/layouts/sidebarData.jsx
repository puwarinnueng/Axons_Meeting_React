import DashboardIcon from '@mui/icons-material/Dashboard';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import WorkIcon from '@mui/icons-material/Work';
import Person2Icon from '@mui/icons-material/Person2';
import ArticleIcon from '@mui/icons-material/Article';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react'
export const sidebar_other = [
  {
    icon: <DashboardIcon />,
    id: 0,
    name: "Dashboard",
    path: "/",
    pathactive: 'dashboard'
  },
  {
    icon: <CalendarMonthIcon />,
    id: 1,
    name: "Meeting",
    path: "/meeting",
    pathactive: 'meeting'
  },
    {
    icon: <WorkIcon />,
    id: 2,
    name: "Tasks",
    path: "/tasks",
    pathactive: 'tasks'
  },
    {
    icon: <ArticleIcon />,
    id: 3,
    name: "Group",
    path: "/group",
    pathactive: 'group'
  },
  // {
  //   icon: <DashboardIcon />,
  //   id: 1,
  //   name: "Dashboard",
  //   path: "/dashboard",
  //   pathactive: 'dashboard'
  // },
  // {
  //   icon: <TextIncreaseIcon />,
  //   id: 2,
  //   name: "Mission",
  //   path: "/mission",
  //   pathactive: 'mission'

  // },
  // {
  //   icon: <WorkIcon />,
  //   id: 3,
  //   name: "Quest",
  //   path: "/quest",
  //   pathactive: 'quest'
  // },
  // {
  //   icon: <Person2Icon />,
  //   // iconActive: "icon-fuel-active",
  //   id: 4,
  //   name: "Users",
  //   path: "/user",
  //   pathactive: 'user'

  // },
  // {
  //   icon: <ArticleIcon />,
  //   id: 5,
  //   name: "Article",
  //   path: "/article",
  //   pathactive: 'article'
  // },
  // {
  //   icon: <InsertCommentIcon />,
  //   id: 6,
  //   name: "Comments",
  //   path: "/comments",
  //   pathactive: 'comments'
  // },
];