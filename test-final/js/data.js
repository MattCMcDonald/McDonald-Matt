/* Shapes */
<script></script>
var loader = document.getElementsByClassName("svgContainer");
function loadBMAnimation(loader) {
  var animation = bodymovin.loadAnimation({
    renderer: 'svg',
    container: loader,
    loop: false,
    autoplay: true,
    path: 'images/data.json'
  });
}
for (var i = 0; i < loader.length; i++) {
 loadBMAnimation(loader[i]);
);
