// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

document.addEventListener('DOMContentLoaded', function(event) {
  const canvasExperiments = ['<div class="cp_embed_wrapper"><iframe id="cp_embed_QOJXyG" src="//codepen.io/shirshirlove/embed/QOJXyG?height=400&amp;theme-id=dark&amp;slug-hash=QOJXyG&amp;default-tab=result&amp;user=shirshirlove&amp;embed-version=2&amp;pen-title=Snow%20Days" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="Snow Days" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div><script async="" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>',
'<div class="cp_embed_wrapper"><iframe id="cp_embed_ZaVMbq" src="//codepen.io/shirshirlove/embed/ZaVMbq?height=400&amp;theme-id=dark&amp;slug-hash=ZaVMbq&amp;default-tab=result&amp;user=shirshirlove&amp;embed-version=2&amp;pen-title=Snow%20Days" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="Snow Days" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div><script async="" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>',
'<div class="cp_embed_wrapper"><iframe id="cp_embed_Kybbbb" src="//codepen.io/shirshirlove/embed/Kybbbb?height=400&amp;theme-id=dark&amp;slug-hash=Kybbbb&amp;default-tab=result&amp;user=shirshirlove&amp;embed-version=2&amp;pen-title=Snow%20Days" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="Snow Days" class="cp_embed_iframe " style="width: 100%; overflow: hidden;"></iframe></div><script async="" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>']

  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  const demoDiv = document.querySelector('.demo');

  leftArrow.addEventListener('click', function(event) {
    event.preventDefault();
    if (parseInt(demoDiv.id) > 0) {
      demoDiv.innerHTML = canvasExperiments[parseInt(demoDiv.id) - 1];
      demoDiv.id = parseInt(demoDiv.id) - 1;
    }
    else {
      demoDiv.innerHTML = canvasExperiments[2];
      demoDiv.id = 2;
    }

  })

  rightArrow.addEventListener('click', function(event) {
    event.preventDefault();
    if (parseInt(demoDiv.id) < 2) {
      demoDiv.innerHTML = canvasExperiments[parseInt(demoDiv.id) + 1];
      demoDiv.id = parseInt(demoDiv.id) + 1;
    }
    else {
      demoDiv.innerHTML = canvasExperiments[0];
      demoDiv.id = 0;
    }

  })
})
