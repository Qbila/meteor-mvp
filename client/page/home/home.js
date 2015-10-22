setTimeout(
  function(){
    // window.location = '/know';
  },
  12000
);

/*
<div class="d-unit">
  <div class="a-areaContext clearfix">
    <span class="pull-left">
      <span class="a-city">Delhi</span>
      &middot;
      <span class="d-meta">12 hrs ago</span>
      &middot;
      <span class="d-meta">Delhi Jal Board</span>
    </span>
    <span class="d-meta pull-right">
      <span class="label label-primary">Official</span>
    </span>
  </div>
  <div class="a-headline">
    <div class="d-image a-state">
      <div class="a-department a-regionHierarchy" title="">DJB</div>
      <div class="d-regionContext" style="font-size: 11px;">State</div>
    </div>
    <div class="d-content">
      <a class="d-title" href="/story">
        Due to limited availability, your region will have only one time water supply
      </a>
      <!--
      <div class="a-callToAction text-right">
        <button type="button" class="btn btn-default btn-sm">Remind Later</button>
        <button type="button" class="btn btn-primary btn-sm">Apply</button>
      </div>
    -->
    </div>
  </div>
  <div class="d-engagement">
    <span class="d-upVote" style="">
      <span class="fa fa-thumbs-o-up"></span>
      &middot;
      <span class="d-count">23</span>
    </span>
    <span class="d-expressions">
      <span class="fa fa-comments-o"></span>
      &middot;
      <span class="d-count">12</span>
    </span>
    <span class="d-expressions">
      <span class="fa fa-share-alt"></span>
      &middot;
      <span class="d-count">12</span>
    </span>
  </div>
</div>

<div class="d-unit">
  <div class="a-areaContext clearfix">
    <span class="pull-left">
      <span class="a-city">Amar Colony</span>
      &middot;
      <span class="d-meta">2 hrs ago</span>
      &middot;
      <span class="d-meta">Resident Welfare Association</span>
    </span>
    <span class="d-meta pull-right">
      <span class="label label-primary">Official</span>
    </span>
  </div>
  <div class="a-headline">
    <div class="d-image a-colony">
      <div class="a-department a-regionHierarchy" title="">RWA</div>
      <div class="d-regionContext" style="font-size: 11px;">Colony</div>
    </div>
    <div class="d-content">
      <a class="d-title" href="/story">
        Meeting with MLA scheduled on 5th October.
      </a>
      <div class="a-callToAction text-right">
        <button type="button" class="btn btn-primary btn-sm">Join</button>
      </div>
    </div>
  </div>
  <div class="d-engagement">
    <span class="d-upVote" style="">
      <span class="fa fa-thumbs-o-up"></span>
      &middot;
      <span class="d-count">23</span>
    </span>
    <span class="d-expressions">
      <span class="fa fa-comments-o"></span>
      &middot;
      <span class="d-count">12</span>
    </span>
    <span class="d-expressions">
      <span class="fa fa-share-alt"></span>
      &middot;
      <span class="d-count">12</span>
    </span>
  </div>
</div>
*/


var homeData = [
  {
    originPlace : 'Banglore',
    time : '12 hours ago',
    organisation : {
      full : 'Indian Space Research Organisation',
      short : 'ISRO'
    },
    postType : 'official',
    postContext : 'National',
    postTitle : 'Openings for Junior Scientists/Engineers with BE/B.Tech or Equivalent Degree in the Disciplines of Civil, Refrigeration & AC and ELECTRICAL',
    postId : '1',
    callToAction : [
      {
        type : 'default',
        name : 'Remind Later'
      },
      {
        type : 'primary',
        name : 'Apply'
      }
    ]
  }
];


Template.home.helpers({
  posts : homeData
});
