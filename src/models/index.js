// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Action, Session, Following, Followers, Like, Comments, MoodBoard, Design, Collection, User } = initSchema(schema);

export {
  Action,
  Session,
  Following,
  Followers,
  Like,
  Comments,
  MoodBoard,
  Design,
  Collection,
  User
};