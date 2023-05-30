import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly followingId?: (FollowingUser | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly followingId: AsyncCollection<FollowingUser>;
  readonly updatedAt?: string | null;
}

export declare type Following = LazyLoading extends LazyLoadingDisabled ? EagerFollowing : LazyFollowing

export declare const Following: (new (init: ModelInit<Following>) => Following) & {
  copyOf(source: Following, mutator: (draft: MutableModel<Following>) => MutableModel<Following> | void): Following;
}

type EagerFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followers, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly users?: (UserFollowers | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followers, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly users: AsyncCollection<UserFollowers>;
  readonly updatedAt?: string | null;
}

export declare type Followers = LazyLoading extends LazyLoadingDisabled ? EagerFollowers : LazyFollowers

export declare const Followers: (new (init: ModelInit<Followers>) => Followers) & {
  copyOf(source: Followers, mutator: (draft: MutableModel<Followers>) => MutableModel<Followers> | void): Followers;
}

type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly collectionID: string;
  readonly designID: string;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly collectionID: string;
  readonly designID: string;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly userID: string;
  readonly designID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly userID: string;
  readonly designID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
}

type EagerMoodBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MoodBoard, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly colors?: (string | null)[] | null;
  readonly textures?: (string | null)[] | null;
  readonly patterns?: (string | null)[] | null;
  readonly inspiration?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMoodBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MoodBoard, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly colors?: (string | null)[] | null;
  readonly textures?: (string | null)[] | null;
  readonly patterns?: (string | null)[] | null;
  readonly inspiration?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MoodBoard = LazyLoading extends LazyLoadingDisabled ? EagerMoodBoard : LazyMoodBoard

export declare const MoodBoard: (new (init: ModelInit<MoodBoard>) => MoodBoard) & {
  copyOf(source: MoodBoard, mutator: (draft: MutableModel<MoodBoard>) => MutableModel<MoodBoard> | void): MoodBoard;
}

type EagerDesign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Design, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly designName?: string | null;
  readonly designDescription?: string | null;
  readonly collectionID: string;
  readonly tags?: string[] | null;
  readonly designURL: string;
  readonly Comments?: (Comments | null)[] | null;
  readonly createdAt?: string | null;
  readonly Likes?: (Like | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyDesign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Design, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly designName?: string | null;
  readonly designDescription?: string | null;
  readonly collectionID: string;
  readonly tags?: string[] | null;
  readonly designURL: string;
  readonly Comments: AsyncCollection<Comments>;
  readonly createdAt?: string | null;
  readonly Likes: AsyncCollection<Like>;
  readonly updatedAt?: string | null;
}

export declare type Design = LazyLoading extends LazyLoadingDisabled ? EagerDesign : LazyDesign

export declare const Design: (new (init: ModelInit<Design>) => Design) & {
  copyOf(source: Design, mutator: (draft: MutableModel<Design>) => MutableModel<Design> | void): Design;
}

type EagerCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly collectionName: string;
  readonly userID: string;
  readonly Designs?: (Design | null)[] | null;
  readonly createdAt?: string | null;
  readonly collectionURL: string;
  readonly Likes?: (Like | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly collectionName: string;
  readonly userID: string;
  readonly Designs: AsyncCollection<Design>;
  readonly createdAt?: string | null;
  readonly collectionURL: string;
  readonly Likes: AsyncCollection<Like>;
  readonly updatedAt?: string | null;
}

export declare type Collection = LazyLoading extends LazyLoadingDisabled ? EagerCollection : LazyCollection

export declare const Collection: (new (init: ModelInit<Collection>) => Collection) & {
  copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly avatar?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly username: string;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly facebookLink?: string | null;
  readonly instagramLink?: string | null;
  readonly twitterLink?: string | null;
  readonly email: string;
  readonly Collections?: (Collection | null)[] | null;
  readonly MoodBoards?: (MoodBoard | null)[] | null;
  readonly Comments?: (Comments | null)[] | null;
  readonly profileUrl: string;
  readonly Likes?: (Like | null)[] | null;
  readonly Followers?: (UserFollowers | null)[] | null;
  readonly followings?: (FollowingUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly avatar?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly username: string;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly facebookLink?: string | null;
  readonly instagramLink?: string | null;
  readonly twitterLink?: string | null;
  readonly email: string;
  readonly Collections: AsyncCollection<Collection>;
  readonly MoodBoards: AsyncCollection<MoodBoard>;
  readonly Comments: AsyncCollection<Comments>;
  readonly profileUrl: string;
  readonly Likes: AsyncCollection<Like>;
  readonly Followers: AsyncCollection<UserFollowers>;
  readonly followings: AsyncCollection<FollowingUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerFollowingUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FollowingUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followingId?: string | null;
  readonly userId?: string | null;
  readonly following: Following;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollowingUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FollowingUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followingId?: string | null;
  readonly userId?: string | null;
  readonly following: AsyncItem<Following>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FollowingUser = LazyLoading extends LazyLoadingDisabled ? EagerFollowingUser : LazyFollowingUser

export declare const FollowingUser: (new (init: ModelInit<FollowingUser>) => FollowingUser) & {
  copyOf(source: FollowingUser, mutator: (draft: MutableModel<FollowingUser>) => MutableModel<FollowingUser> | void): FollowingUser;
}

type EagerUserFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFollowers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followersId?: string | null;
  readonly userId?: string | null;
  readonly followers: Followers;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFollowers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followersId?: string | null;
  readonly userId?: string | null;
  readonly followers: AsyncItem<Followers>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFollowers = LazyLoading extends LazyLoadingDisabled ? EagerUserFollowers : LazyUserFollowers

export declare const UserFollowers: (new (init: ModelInit<UserFollowers>) => UserFollowers) & {
  copyOf(source: UserFollowers, mutator: (draft: MutableModel<UserFollowers>) => MutableModel<UserFollowers> | void): UserFollowers;
}