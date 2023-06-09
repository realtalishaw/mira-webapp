/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction($filter: ModelSubscriptionActionFilterInput) {
    onCreateAction(filter: $filter) {
      id
      prompt
      imgKey
      sessionID
      tool
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction($filter: ModelSubscriptionActionFilterInput) {
    onUpdateAction(filter: $filter) {
      id
      prompt
      imgKey
      sessionID
      tool
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction($filter: ModelSubscriptionActionFilterInput) {
    onDeleteAction(filter: $filter) {
      id
      prompt
      imgKey
      sessionID
      tool
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
      id
      designID
      Actions {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
      id
      designID
      Actions {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
      id
      designID
      Actions {
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
      id
      createdAt
      userID
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
      userID
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
      userID
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
      userID
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
      userID
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
      userID
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
      commentsID
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
      commentsID
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
      commentsID
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onUpdateComments(filter: $filter) {
      id
      content
      userID
      designID
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
    onDeleteComments(filter: $filter) {
      id
      content
      userID
      designID
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
      Comments {
        nextToken
        startedAt
      }
      createdAt
      Likes {
        nextToken
        startedAt
      }
      designImage
      Session {
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
      Comments {
        nextToken
        startedAt
      }
      createdAt
      Likes {
        nextToken
        startedAt
      }
      designImage
      Session {
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
      Comments {
        nextToken
        startedAt
      }
      createdAt
      Likes {
        nextToken
        startedAt
      }
      designImage
      Session {
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
      privacy
      description
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
      privacy
      description
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
      privacy
      description
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
      uploads
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
      uploads
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
      uploads
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
