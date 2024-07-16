
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);

  document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.querySelector('.video-container');
    var overlay = videoContainer.querySelector('.video-overlay');
    var iframe = videoContainer.querySelector('.video-frame');

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        iframe.style.filter = 'none';

        var player = new YT.Player(iframe, {
            events: {
                'onReady': function (event) {
                    event.target.playVideo();
                }
            }
        });
    });
});


// FUNGSI LOGIN GOOGLE

document.getElementById('login-icon').addEventListener('click', function() {
  document.getElementById('login-popup').classList.add('active');
});

document.getElementById('popup-close').addEventListener('click', function() {
  document.getElementById('login-popup').classList.remove('active');
});

// Close the pop-up when clicking outside of it
document.addEventListener('click', function(event) {
  const popup = document.getElementById('login-popup');
  const icon = document.getElementById('login-icon');

  if (!popup.contains(event.target) && event.target !== icon) {
      popup.classList.remove('active');
  }
});

function googleLogin() {
  // Add your Google login functionality here
  alert('Google login clicked!');
}

// Grafik Game
document.addEventListener('DOMContentLoaded', function () {
  var expCtx = document.getElementById('exp-chart').getContext('2d');
  var levelCtx = document.getElementById('level-chart').getContext('2d');

  var expChart = new Chart(expCtx, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'EXP Gained',
              data: [200, 400, 300, 500, 600, 700],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Month'
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'EXP'
                  }
              }
          }
      }
  });

  var levelChart = new Chart(levelCtx, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'Level Progress',
              data: [1, 2, 3, 4, 5, 6],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: true,
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Month'
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Level'
                  }
              }
          }
      }
  });
});



// Ablity test
// Open popup when "Read More" button is clicked
document.getElementById('openPopupBtn').addEventListener('click', function() {
  document.getElementById('popupContainer').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling background content
});

// Close popup when "Close" button is clicked
document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('popupContainer').style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling background content
});

// Close popup if user clicks outside of it
window.addEventListener('click', function(event) {
  var popup = document.getElementById('popupContainer');
  if (event.target == popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling background content
  }
});


// Like Post
function likePost(button) {
  const likeIcon = document.createElement('span');
  likeIcon.classList.add('like-animation');
  likeIcon.innerHTML = '<i class="fas fa-heart"></i>';
  button.closest('.custom-block').appendChild(likeIcon);
  button.classList.toggle('liked');
  setTimeout(() => {
      likeIcon.remove();
  }, 500);
  button.innerHTML = button.classList.contains('liked') ? '<i class="fas fa-heart"></i> Liked' : '<i class="fas fa-heart"></i> Like';
}

function sharePost(url) {
  const tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  tempInput.value = window.location.origin + "/" + url;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Link copied to clipboard!");
}

function submitComment() {
  // Assuming there's a way to submit the comment, e.g., via an API call
  // Display the announcement popup
  const announcement = document.getElementById('announcement');
  announcement.style.display = 'block';
  setTimeout(() => {
      announcement.style.display = 'none';
  }, 3000);

  // Close the modal
  const commentModal = new bootstrap.Modal(document.getElementById('commentModal'));
  commentModal.hide();
}