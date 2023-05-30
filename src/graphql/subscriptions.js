/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
      id
      createdAt
      followingId {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onUpdateFollowing(filter: $filter) {
      id
      createdAt
      followingId {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onDeleteFollowing(filter: $filter) {
      id
      createdAt
      followingId {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFollowers = /* GraphQL */ `
  subscription OnCreateFollowers(
    $filter: ModelSubscriptionFollowersFilterInput
  ) {
    onCreateFollowers(filter: $filter) {
      id
      createdAt
      users {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFollowers = /* GraphQL */ `
  subscription OnUpdateFollowers(
    $filter: ModelSubscriptionFollowersFilterInput
  ) {
    onUpdateFollowers(filter: $filter) {
      id
      createdAt
      users {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFollowers = /* GraphQL */ `
  subscription OnDeleteFollowers(
    $filter: ModelSubscriptionFollowersFilterInput
  ) {
    onDeleteFollowers(filter: $filter) {
      id
      createdAt
      users {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
      id
      createdAt
      userID
      collectionID
      designID
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
      id
      createdAt
      userID
      collectionID
      designID
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
      id
      createdAt
      userID
      collectionID
      designID
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onCreateComments(filter: $filter) {
      id
      content
      userID
      designID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onUpdateComments(filter: $filter) {
      id
      content
      userID
      designID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
    onDeleteComments(filter: $filter) {
      id
      content
      userID
      designID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMoodBoard = /* GraphQL */ `
  subscription OnCreateMoodBoard(
    $filter: ModelSubscriptionMoodBoardFilterInput
  ) {
    onCreateMoodBoard(filter: $filter) {
      id
      name
      colors
      textures
      patterns
      inspiration
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMoodBoard = /* GraphQL */ `
  subscription OnUpdateMoodBoard(
    $filter: ModelSubscriptionMoodBoardFilterInput
  ) {
    onUpdateMoodBoard(filter: $filter) {
      id
      name
      colors
      textures
      patterns
      inspiration
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMoodBoard = /* GraphQL */ `
  subscription OnDeleteMoodBoard(
    $filter: ModelSubscriptionMoodBoardFilterInput
  ) {
    onDeleteMoodBoard(filter: $filter) {
      id
      name
      colors
      textures
      patterns
      inspiration
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDesign = /* GraphQL */ `
  subscription OnCreateDesign($filter: ModelSubscriptionDesignFilterInput) {
    onCreateDesign(filter: $filter) {
      id
      designName
      designDescription
      collectionID
      tags
      designURL
      Comments {
        nextToken
        startedAt
      }
      createdAt
      Likes {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDesign = /* GraphQL */ `
  subscription OnUpdateDesign($filter: ModelSubscriptionDesignFilterInput) {
    onUpdateDesign(filter: $filter) {
      id
      designName
      designDescription
      collectionID
      tags
      designURL
      Comments {
        nextToken
        startedAt
      }
      createdAt
      Likes {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDesign = /* GraphQL */ `
  subscription OnDeleteDesign($filter: ModelSubscriptionDesignFilterInput) {
    onDeleteDesign(filter: $filter) {
      id
      designName
      designDescription
      collectionID
      tags
      designURL
      Comments {
        nextToken
        startedAt
      }
      createdAt
      Likes {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onCreateCollection(filter: $filter) {
      id
      collectionName
      userID
      Designs {
        nextToken
        startedAt
      }
      createdAt
      collectionURL
      Likes {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onUpdateCollection(filter: $filter) {
      id
      collectionName
      userID
      Designs {
        nextToken
        startedAt
      }
      createdAt
      collectionURL
      Likes {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onDeleteCollection(filter: $filter) {
      id
      collectionName
      userID
      Designs {
        nextToken
        startedAt
      }
      createdAt
      collectionURL
      Likes {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      avatar
      firstName
      lastName
      username
      bio
      website
      facebookLink
      instagramLink
      twitterLink
      email
      Collections {
        nextToken
        startedAt
      }
      MoodBoards {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      profileUrl
      Likes {
        nextToken
        startedAt
      }
      Followers {
        nextToken
        startedAt
      }
      followings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      avatar
      firstName
      lastName
      username
      bio
      website
      facebookLink
      instagramLink
      twitterLink
      email
      Collections {
        nextToken
        startedAt
      }
      MoodBoards {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      profileUrl
      Likes {
        nextToken
        startedAt
      }
      Followers {
        nextToken
        startedAt
      }
      followings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      avatar
      firstName
      lastName
      username
      bio
      website
      facebookLink
      instagramLink
      twitterLink
      email
      Collections {
        nextToken
        startedAt
      }
      MoodBoards {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      profileUrl
      Likes {
        nextToken
        startedAt
      }
      Followers {
        nextToken
        startedAt
      }
      followings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFollowingUser = /* GraphQL */ `
  subscription OnCreateFollowingUser(
    $filter: ModelSubscriptionFollowingUserFilterInput
  ) {
    onCreateFollowingUser(filter: $filter) {
      id
      followingId
      userId
      following {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        avatar
        firstName
        lastName
        username
        bio
        website
        facebookLink
        instagramLink
        twitterLink
        email
        profileUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFollowingUser = /* GraphQL */ `
  subscription OnUpdateFollowingUser(
    $filter: ModelSubscriptionFollowingUserFilterInput
  ) {
    onUpdateFollowingUser(filter: $filter) {
      id
      followingId
      userId
      following {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        avatar
        firstName
        lastName
        username
        bio
        website
        facebookLink
        instagramLink
        twitterLink
        email
        profileUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFollowingUser = /* GraphQL */ `
  subscription OnDeleteFollowingUser(
    $filter: ModelSubscriptionFollowingUserFilterInput
  ) {
    onDeleteFollowingUser(filter: $filter) {
      id
      followingId
      userId
      following {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        avatar
        firstName
        lastName
        username
        bio
        website
        facebookLink
        instagramLink
        twitterLink
        email
        profileUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserFollowers = /* GraphQL */ `
  subscription OnCreateUserFollowers(
    $filter: ModelSubscriptionUserFollowersFilterInput
  ) {
    onCreateUserFollowers(filter: $filter) {
      id
      followersId
      userId
      followers {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        avatar
        firstName
        lastName
        username
        bio
        website
        facebookLink
        instagramLink
        twitterLink
        email
        profileUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserFollowers = /* GraphQL */ `
  subscription OnUpdateUserFollowers(
    $filter: ModelSubscriptionUserFollowersFilterInput
  ) {
    onUpdateUserFollowers(filter: $filter) {
      id
      followersId
      userId
      followers {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        avatar
        firstName
        lastName
        username
        bio
        website
        facebookLink
        instagramLink
        twitterLink
        email
        profileUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserFollowers = /* GraphQL */ `
  subscription OnDeleteUserFollowers(
    $filter: ModelSubscriptionUserFollowersFilterInput
  ) {
    onDeleteUserFollowers(filter: $filter) {
      id
      followersId
      userId
      followers {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        avatar
        firstName
        lastName
        username
        bio
        website
        facebookLink
        instagramLink
        twitterLink
        email
        profileUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
