/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
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
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncActions = /* GraphQL */ `
  query SyncActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const actionsBySessionID = /* GraphQL */ `
  query ActionsBySessionID(
    $sessionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    actionsBySessionID(
      sessionID: $sessionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        designID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        designID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const sessionsByDesignID = /* GraphQL */ `
  query SessionsByDesignID(
    $designID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionsByDesignID(
      designID: $designID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        designID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
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
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowings = /* GraphQL */ `
  query SyncFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const followingsByUserID = /* GraphQL */ `
  query FollowingsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers($id: ID!) {
    getFollowers(id: $id) {
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
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowers = /* GraphQL */ `
  query SyncFollowers(
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const followersByUserID = /* GraphQL */ `
  query FollowersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const likesByCollectionID = /* GraphQL */ `
  query LikesByCollectionID(
    $collectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByCollectionID(
      collectionID: $collectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const likesByDesignID = /* GraphQL */ `
  query LikesByDesignID(
    $designID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByDesignID(
      designID: $designID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const likesByCommentsID = /* GraphQL */ `
  query LikesByCommentsID(
    $commentsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByCommentsID(
      commentsID: $commentsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const commentsByDesignID = /* GraphQL */ `
  query CommentsByDesignID(
    $designID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByDesignID(
      designID: $designID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMoodBoard = /* GraphQL */ `
  query GetMoodBoard($id: ID!) {
    getMoodBoard(id: $id) {
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
export const listMoodBoards = /* GraphQL */ `
  query ListMoodBoards(
    $filter: ModelMoodBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoodBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMoodBoards = /* GraphQL */ `
  query SyncMoodBoards(
    $filter: ModelMoodBoardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMoodBoards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const moodBoardsByUserID = /* GraphQL */ `
  query MoodBoardsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoodBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moodBoardsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDesign = /* GraphQL */ `
  query GetDesign($id: ID!) {
    getDesign(id: $id) {
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
export const listDesigns = /* GraphQL */ `
  query ListDesigns(
    $filter: ModelDesignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDesigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        designName
        designDescription
        collectionID
        tags
        createdAt
        designImage
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDesigns = /* GraphQL */ `
  query SyncDesigns(
    $filter: ModelDesignFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDesigns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        designName
        designDescription
        collectionID
        tags
        createdAt
        designImage
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const designsByCollectionID = /* GraphQL */ `
  query DesignsByCollectionID(
    $collectionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDesignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    designsByCollectionID(
      collectionID: $collectionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        designName
        designDescription
        collectionID
        tags
        createdAt
        designImage
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
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
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        collectionName
        userID
        createdAt
        collectionURL
        privacy
        description
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCollections = /* GraphQL */ `
  query SyncCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        collectionName
        userID
        createdAt
        collectionURL
        privacy
        description
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const collectionsByUserID = /* GraphQL */ `
  query CollectionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collectionName
        userID
        createdAt
        collectionURL
        privacy
        description
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        uploads
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        uploads
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
