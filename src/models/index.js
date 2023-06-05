// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Session, Following, Followers, Like, Comments, MoodBoard, Design, Collection, User } = initSchema(schema);

export {
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