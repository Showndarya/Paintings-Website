  var config = {
    apiKey: "AIzaSyDEndfc2n4lPlwDn6qgRX_iaN6bO2n5ZXk",
    authDomain: "amature-paintings.firebaseapp.com",
    databaseURL: "https://amature-paintings.firebaseio.com",
    projectId: "amature-paintings",
    storageBucket: "",
    messagingSenderId: "42233765300"
  };
  firebase.initializeApp(config);

  $(document).ready(function(){
    $(document).on('click','.about',function(e) {
      e.preventDefault();
      $('#aboutmodal').modal('show'); 
    });   
});

 $(document).ready(function(){
    $(document).on('click','.pop',function(e) {
      e.preventDefault();
      $('.like').attr('id', $(this).find('img').attr('id'));
      $('.imgdwn').attr('href', $(this).find('img').attr('src'));
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      sl();
      $('.cap').html($(this).find('img').attr('alt'));
      $('#imagemodal').modal('show'); 
    });   
});
function sl()
{
  var id = $('.like').attr('id');
  var lc = firebase.database().ref(id+'/Likes/');
  lc.once('value').then(function(snapshot) {
      $('#like').html(snapshot.val());
    });
}
function rd()
 {
  var id = $('.like').attr('id');
  var lc = firebase.database().ref(id+'/Likes/');
  lc.once('value').then(function(snapshot) {
      wd(snapshot.val(),id);
      //console.log(snapshot.val());
    });
 }
function wd(likes,id) {
  firebase.database().ref(id+'/').set({
      Likes:likes +1,
    });
  sl();
}