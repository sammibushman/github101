(function(){
  function populateDynamicElement() {
    var dynamicElement = document.getElementById('dynamic')
    dynamicElement.innerHTML = 'Like my Twitter for more';
    dynamicElement.innerHTML = 'The time is ' + Date().toLocaleString();
  }

  // Add your JS here
  // window.addEventListener('load', function(){
    // alert("Hire me!");
    // populateDynamicElement();
  });
})();
