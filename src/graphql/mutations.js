/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
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
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
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
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
export const createFollowers = /* GraphQL */ `
  mutation CreateFollowers(
    $input: CreateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    createFollowers(input: $input, condition: $condition) {
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
export const updateFollowers = /* GraphQL */ `
  mutation UpdateFollowers(
    $input: UpdateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    updateFollowers(input: $input, condition: $condition) {
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
export const deleteFollowers = /* GraphQL */ `
  mutation DeleteFollowers(
    $input: DeleteFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    deleteFollowers(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
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
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
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
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
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
export const createMoodBoard = /* GraphQL */ `
  mutation CreateMoodBoard(
    $input: CreateMoodBoardInput!
    $condition: ModelMoodBoardConditionInput
  ) {
    createMoodBoard(input: $input, condition: $condition) {
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
export const updateMoodBoard = /* GraphQL */ `
  mutation UpdateMoodBoard(
    $input: UpdateMoodBoardInput!
    $condition: ModelMoodBoardConditionInput
  ) {
    updateMoodBoard(input: $input, condition: $condition) {
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
export const deleteMoodBoard = /* GraphQL */ `
  mutation DeleteMoodBoard(
    $input: DeleteMoodBoardInput!
    $condition: ModelMoodBoardConditionInput
  ) {
    deleteMoodBoard(input: $input, condition: $condition) {
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
export const createDesign = /* GraphQL */ `
  mutation CreateDesign(
    $input: CreateDesignInput!
    $condition: ModelDesignConditionInput
  ) {
    createDesign(input: $input, condition: $condition) {
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
export const updateDesign = /* GraphQL */ `
  mutation UpdateDesign(
    $input: UpdateDesignInput!
    $condition: ModelDesignConditionInput
  ) {
    updateDesign(input: $input, condition: $condition) {
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
export const deleteDesign = /* GraphQL */ `
  mutation DeleteDesign(
    $input: DeleteDesignInput!
    $condition: ModelDesignConditionInput
  ) {
    deleteDesign(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
