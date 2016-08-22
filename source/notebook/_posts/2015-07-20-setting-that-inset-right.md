---
layout: post
title: "Getting that inset of the box-shadow right"
redirect_from:
  - /journal/setting-the-inset/
  - /article/setting-the-inset/
---

A little CSS problem that’s been bugging me for some time is the inability to set an inset box shadow, for one side only.

You see, if I do `box-shadow: inset -12px 0 15px rgba(0, 0, 0, .6);` it will give me this result:

<img src="/uploads/dist/inset-shadow-unwanted-600.png"
  sizes="
  ({{site.desktop-xl}}) 850px,
  ({{site.tablet-lg}}) 770px,
  ({{site.tablet-sm}}) 660px,
  100%"
  srcset="
  /uploads/dist/inset-shadow-unwanted-400.png 400w,
  /uploads/dist/inset-shadow-unwanted-600.png 600w,
  /uploads/dist/inset-shadow-unwanted-800.png 800w,
  /uploads/dist/inset-shadow-unwanted-1000.png 1000w,
  /uploads/dist/inset-shadow-unwanted-1400.png 1400w"
  alt="Unwanted results for insetting of a box-shadow">

Today, I set off to find a proper solution to the problem and it was much easier than I could have imagined. There is a fourth attribute for the box-shadow propery which controls the spread radius. By using a negative unit for the spread radius; I could actually position the shadow outside the box and then bring it back to view only for the side I want. Simple. `box-shadow: inset -12px 0 15px -10px rgba(0, 0, 0, .6);`

You can see the result in the pen below.

<p data-height="314" data-theme-id="0" data-slug-hash="JdBgWZ" data-default-tab="result" data-user="holmberg" class='codepen'>See the Pen <a href='http://codepen.io/holmberg/pen/JdBgWZ/'>Inset Shadow (one side)</a> by Johannes Holmberg (<a href='http://codepen.io/holmberg'>@holmberg</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
