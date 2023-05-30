// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Following, Followers, Like, Comments, MoodBoard, Design, Collection, User, FollowingUser, UserFollowers } = initSchema(schema);

export {
  Following,
  Followers,
  Like,
  Comments,
  MoodBoard,
  Design,
  Collection,
  User,
  FollowingUser,
  UserFollowers
};