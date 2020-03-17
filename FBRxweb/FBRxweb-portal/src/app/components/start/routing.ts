import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router"
import { Injectable } from '@angular/core';
import { ChatMediaAddComponent } from '../facebook-chat/chat-medias/add/chat-media-add.component';
import { vOnlineUserListAddComponent } from '../facebook-chat/v-online-user-lists/add/v-online-user-list-add.component';
import { ChatMeessageAddComponent } from '../facebook-chat/chat-meessages/add/chat-meessage-add.component';
import { FacebookUserWorkAddComponent } from '../facebook-user-work/facebook-user-works/add/facebook-user-work-add.component';
import { FacebookUserWorkEditComponent } from '../facebook-user-work/facebook-user-works/edit/facebook-user-work-edit.component';
import { EducationDetailAddComponent } from '../education-detail/education-details/add/education-detail-add.component';
import { vUserProfileAddComponent } from '../user-profile-detail/v-user-profiles/add/v-user-profile-add.component';
import { FacebookUser } from '@app/models';
import { FacebookUserAddComponent } from '../facebook-user/facebook-users/add/facebook-user-add.component';
import { FacebookUserEditComponent } from '../facebook-user/facebook-users/edit/facebook-user-edit.component';
import { LogActivityListComponent } from '../log-activity/log-activities/list/log-activity-list.component';
import { LogActivityAddComponent } from '../log-activity/log-activities/add/log-activity-add.component';
import { vAllOtherUserAddComponent } from '../facebook-chat/v-all-other-users/add/v-all-other-user-add.component';
var routings = [
    //  {
    //      path: '', redirectTo: 'facebook-users/add', pathMatch: 'full',
	//  },
	 {
		path: 'register', component:FacebookUserAddComponent
	},
	{
		path: 'logActivity', component:LogActivityAddComponent
	},
	{
		path: 'allUser', component:vAllOtherUserAddComponent
	},		
	{
		path:"changePassword" , component:FacebookUserEditComponent
	},
     {
        path: "login",
        loadChildren: () => import("../login/login.module").then(m => m.LoginModule),
	 },
		{
			path:"Chat/:id",
			component:ChatMediaAddComponent
		}
		,
		{
			path:"UserList",
			component:ChatMeessageAddComponent
		},
		{
			path:"OnlineUser",
			component:vOnlineUserListAddComponent
		},
		// {
		// 		path:'work' ,component:FacebookUserWorkAddComponent

		// },
		{
			path:'editWork' ,component:FacebookUserWorkEditComponent

		},
		{
 			path:'vUserProfile' ,component:vUserProfileAddComponent

		 },
		 {
		path:'Education' ,component:EducationDetailAddComponent
	
		},
       		 {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "post-comments",
			loadChildren: () => import("../post/post-comments/post-comment.module").then(m => m.PostCommentModule)
		},
        {
			path: "post-likes",
			loadChildren: () => import("../post/post-likes/post-like.module").then(m => m.PostLikeModule)
		},
        {
			path: "post-medias",
			loadChildren: () => import("../post/post-medias/post-media.module").then(m => m.PostMediaModule)
		},
        {
			path: "post-messages",
			loadChildren: () => import("../post/post-messages/post-message.module").then(m => m.PostMessageModule)
		},
        {
			path: "post-shares",
			loadChildren: () => import("../post/post-shares/post-share.module").then(m => m.PostShareModule)
		},
        {
			path: "v-all-posts",
			loadChildren: () => import("../post/v-all-posts/v-all-post.module").then(m => m.vAllPostModule)
		},
        {
			path: "v-check-comment-users",
			loadChildren: () => import("../post/v-check-comment-users/v-check-comment-user.module").then(m => m.vCheckCommentUserModule)
		},
        {
			path: "v-check-like-users",
			loadChildren: () => import("../post/v-check-like-users/v-check-like-user.module").then(m => m.vCheckLikeUserModule)
		},
        {
			path: "v-check-share-users",
			loadChildren: () => import("../post/v-check-share-users/v-check-share-user.module").then(m => m.vCheckShareUserModule)
		},
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "post-comments",
			loadChildren: () => import("../post/post-comments/post-comment.module").then(m => m.PostCommentModule)
		},
        {
			path: "post-likes",
			loadChildren: () => import("../post/post-likes/post-like.module").then(m => m.PostLikeModule)
		},
        {
			path: "post-medias",
			loadChildren: () => import("../post/post-medias/post-media.module").then(m => m.PostMediaModule)
		},
        {
			path: "post-messages",
			loadChildren: () => import("../post/post-messages/post-message.module").then(m => m.PostMessageModule)
		},
        {
			path: "post-shares",
			loadChildren: () => import("../post/post-shares/post-share.module").then(m => m.PostShareModule)
		},
        {
			path: "v-all-posts",
			loadChildren: () => import("../post/v-all-posts/v-all-post.module").then(m => m.vAllPostModule)
		},
        {
			path: "v-check-comment-users",
			loadChildren: () => import("../post/v-check-comment-users/v-check-comment-user.module").then(m => m.vCheckCommentUserModule)
		},
        {
			path: "v-check-like-users",
			loadChildren: () => import("../post/v-check-like-users/v-check-like-user.module").then(m => m.vCheckLikeUserModule)
		},
        {
			path: "v-check-share-users",
			loadChildren: () => import("../post/v-check-share-users/v-check-share-user.module").then(m => m.vCheckShareUserModule)
		},
       
        {
			path: "education-details",
			loadChildren: () => import("../education-detail/education-details/education-detail.module").then(m => m.EducationDetailModule)
		},
        {
			path: "chat-medias",
			loadChildren: () => import("../facebook-chat/chat-medias/chat-media.module").then(m => m.ChatMediaModule)
		},
        {
			path: "chat-meessages",
			loadChildren: () => import("../facebook-chat/chat-meessages/chat-meessage.module").then(m => m.ChatMeessageModule)
		},
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../facebook-chat/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "facebook-user-details",
			loadChildren: () => import("../facebook-user-detail/facebook-user-details/facebook-user-detail.module").then(m => m.FacebookUserDetailModule)
		},
        {
			path: "facebook-users",
			loadChildren: () => import("../facebook-user/facebook-users/facebook-user.module").then(m => m.FacebookUserModule)
		},
        {
			path: "facebook-user-works",
			loadChildren: () => import("../facebook-user-work/facebook-user-works/facebook-user-work.module").then(m => m.FacebookUserWorkModule)
		},
        {
			path: "post-comments",
			loadChildren: () => import("../post/post-comments/post-comment.module").then(m => m.PostCommentModule)
		},
        {
			path: "post-likes",
			loadChildren: () => import("../post/post-likes/post-like.module").then(m => m.PostLikeModule)
		},
        {
			path: "post-medias",
			loadChildren: () => import("../post/post-medias/post-media.module").then(m => m.PostMediaModule)
		},
        {
			path: "post-messages",
			loadChildren: () => import("../post/post-messages/post-message.module").then(m => m.PostMessageModule)
		},
        {
			path: "post-shares",
			loadChildren: () => import("../post/post-shares/post-share.module").then(m => m.PostShareModule)
		},
        {
			path: "v-all-posts",
			loadChildren: () => import("../post/v-all-posts/v-all-post.module").then(m => m.vAllPostModule)
		},
        {
			path: "v-check-comment-users",
			loadChildren: () => import("../post/v-check-comment-users/v-check-comment-user.module").then(m => m.vCheckCommentUserModule)
		},
        {
			path: "v-check-like-users",
			loadChildren: () => import("../post/v-check-like-users/v-check-like-user.module").then(m => m.vCheckLikeUserModule)
		},
        {
			path: "v-check-share-users",
			loadChildren: () => import("../post/v-check-share-users/v-check-share-user.module").then(m => m.vCheckShareUserModule)
		},
      
        {
			path: "v-online-user-lists",
			loadChildren: () => import("../view-online-user/v-online-user-lists/v-online-user-list.module").then(m => m.vOnlineUserListModule)
		},
        {
			path: "log-activities",
			loadChildren: () => import("../log-activity/log-activities/log-activity.module").then(m => m.LogActivityModule)
		},
        {
			path: "log-activities",
			loadChildren: () => import("../log-activity/log-activities/log-activity.module").then(m => m.LogActivityModule)
		},
        {
			path: "log-activities",
			loadChildren: () => import("../log-activity/log-activities/log-activity.module").then(m => m.LogActivityModule)
		},
        {
			path: "v-log-activities",
			loadChildren: () => import("../log-activity/v-log-activities/v-log-activity.module").then(m => m.vLogActivityModule)
		},
        {
			path: "v-log-activities",
			loadChildren: () => import("../log-activity/v-log-activities/v-log-activity.module").then(m => m.vLogActivityModule)
		},
        {
			path: "v-log-activities",
			loadChildren: () => import("../log-activity/v-log-activities/v-log-activity.module").then(m => m.vLogActivityModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
        {
			path: "v-all-other-users",
			loadChildren: () => import("../facebook-chat/v-all-other-users/v-all-other-user.module").then(m => m.vAllOtherUserModule)
		},
//generated code
//])
	]

export const ROUTES: Routes = routings;

console.log(ROUTES)
