if (NewsFeed.find().count() == 0) {

  NewsFeed.insert({
    storySourceImage : '/source/banglorePolice/banglorePolice.png',
    storySourceName : 'Kangra Police',
    storySourceAction : '',
    storySourceResource : '',
    storyDate : 'May 15',
    storyLocation : 'Kangra',
    storyRegionScope : 'District',
    storyPostText : 'One more post to add here, we are getting regular here. And thats great.',
    storyPostImage : '/city/kangra/cityImages/1.jpg'
  });

  var commentedPost = NewsFeed.insert({
    storySourceImage : '/source/banglorePolice/banglorePolice.png',
    storySourceName : 'Kangra Police',
    storySourceAction : '',
    storySourceResource : '',
    storyDate : 'May 12',  // preferably to use time stamp and moment.js
    storyLocation : 'Kangra',
    storyRegionScope : 'District',
    storyPostText : 'This is a post to share information with local public. We are very pleased to share this information. Just an attempt to make this text double lined, so that I can check how it looks.',
    storyPostImage : '/city/kangra/cityImages/1.jpg'
  });

  NewsFeed.insert({
    storySourceImage : '/source/banglorePolice/banglorePolice.png',
    storySourceName : 'Kangra Police',
    storySourceAction : '',
    storySourceResource : '',
    storyDate : 'May 10',  // preferably to use time stamp and moment.js
    storyLocation : 'Kangra',
    storyRegionScope : 'District',
    storyPostText : 'This is the FIRST POST EVER, and it is epic.',
    storyPostImage : '/city/kangra/cityImages/1.jpg'
  });

}


if (Comments.find().count() == 0) {

  Comments.insert({
    storyId : commentedPost,
    userId : 'pqfhS5zCMnaSiqH4R',
    submitted : Date(),
    body : 'this is the first comment anywhere on qbila. Congrats.'
  });

  Comments.insert({
    storyId : commentedPost,
    userId : 'rHH598TkwBZEdeYz7',
    submitted : Date(),
    body : 'this is the second comment anywhere on qbila. Its going great.'
  });

}
