import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// blog
import ShowBlogs from '@/views/blog/ShowBlogs.vue'
import ShowBlog from '@/views/blog/ShowBlog.vue'
import EditBlog from '@/views/blog/EditBlog.vue'
// series
import ShowSeries from "@/views/series/ShowSeries.vue"
import ShowOneSeries from "@/views/series/ShowOneSeries.vue"
import EditSeries from "@/views/series/EditSeries.vue"
// questions
import EditQuestion from '@/views/question/EditQuestion.vue'
import ShowQuestions from '@/views/question/ShowQuestions.vue'
import ShowQuestion from '@/views/question/ShowQuestion.vue'

import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue'

//Profile
import Profile from '@/views/Profile'
import ProfileInformation from '@/views/Profile/ProfileInformation'
import ProfileBlogs from '@/views/Profile/ProfileBlogs'
import ProfileFollow from '@/views/Profile/ProfileFollow'
import ProfileFriends from '@/views/Profile/ProfileFriends'
import ProfileQuestions from '@/views/Profile/ProfileQuestions'
import ChangeMail from '@/views/Profile/ChangeMail'
import ChangePassword from '@/views/Profile/ChangePassword'
import ProfileSettings from '@/views/Profile/ProfileSettings'
import ForgetPassword from '@/views/Profile/ForgetPassword'
import ProfileSkillTrees from '@/views/Profile/ProfileSkillTrees'
import ProfileMessageCenter from '@/views/Profile/ProfileMessageCenter'
import ProfileReply from '@/views/Profile/ProfileReply'
import RequestFriend from '@/views/Profile/RequestFriend'
//
import EditProfile from '@/views/Profile/EditProfile.vue'
import SendRequest from '@/views/Profile/SendRequest.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/',                  name: 'Home',         component: Home },
  { path: '/login',             name: 'Login',        component: Login },
  { path: '/search',            name: 'Search',       component: Search },
  // blogs
  { path: '/show/blogs',        name: 'ShowBlogs',    component: ShowBlogs },
  { path: '/show/blog/:id',     name: 'ShowBlog',     component: ShowBlog },
  { path: '/edit/blog',         name: 'NewBlog',      component: EditBlog },
  { path: '/edit/blog/:id',     name: 'EditBlog',     component: EditBlog,      props: true },
  // series
  { path: '/show/series',       name: 'ShowSeries',   component: ShowSeries },
  { path: '/show/series/:id',   name: 'ShowOneSeries',component: ShowOneSeries },
  { path: '/edit/series/',      name: 'NewSeries',    component: EditSeries },
  { path: '/edit/series/:id',   name: 'EditSeries',   component: EditSeries,    props: true },
  // questions
  { path: '/edit/question',     name: 'NewQuestion',  component: EditQuestion},
  { path: '/show/questions',    name: 'ShowQuestions',component: ShowQuestions},
  { path: '/edit/question/:id', name: 'EditQuestion', component: EditQuestion},
  { path: '/show/question/:id', name: 'ShowQuestion', component: ShowQuestion},
  { path: '/about',             name: 'About',        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  // profile
  { path: '/profile',           name: 'Profile',      component: Profile,
    children:[
      { path: 'information/:id',  name: 'ProfileInformation',   component: ProfileInformation},
      { path: 'blogs',            name: 'ProfileBlog',          component: ProfileBlogs},
      { path: 'questions',        name: 'ProfileQuestions',     component: ProfileQuestions},
      { path: 'edit/profile/:id', name: 'EditProfile',          component: EditProfile },
      { path: 'follow/:id',       name: 'ProfileFollow',        component: ProfileFollow},
      { path: 'sendrequest/:id',   name: 'SendRequest',        component: SendRequest },
      { path: 'skilltrees',       name: 'ProfileSkillTrees',    component: ProfileSkillTrees},
      { path: 'messagecenter',    name: 'ProfileMessageCenter', component: ProfileMessageCenter,
        redirect: 'messagecenter/friends/:id',
        children:[
          { path: 'friends/:id',        name: 'Friends',        component: ProfileFriends},
          { path: 'reply',              name: 'Reply',          component: ProfileReply},
          { path: 'requestfriend/:id',  name: 'RequestFriend',  component: RequestFriend},
        ]
      },
      { path: 'settings',               name: 'ProfileSettings',      component: ProfileSettings,
        redirect: 'settings/changepassword/:id',
        children:[
          { path: 'changepassword/:id', name: 'ChangePassword', component: ChangePassword},
          { path: 'changemail',         name: 'ChangeMail',     component: ChangeMail},
          { path: 'forgetpassword',     name: 'ForgetPassword', component: ForgetPassword},
        ]},
    ]},
]

const router = new VueRouter({
  routes
})

export default router
