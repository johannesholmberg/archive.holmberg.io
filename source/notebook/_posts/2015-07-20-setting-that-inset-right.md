---
layout: post
title: "Getting that inset of the box-shadow right"
has_intro: true
redirect_from:
  - /journal/setting-the-inset/
  - /article/setting-the-inset/
  - /article/setting-that-inset-right/
  - /notebook/setting-that-inset-right/
---

A little CSS problem that’s been bugging me for some time is the inability to set an inset box shadow, for one side only.

You see, if I do `box-shadow: inset -12px 0 15px rgba(0, 0, 0, .6);` it will give me this result:

{% assign filename = "inset-shadow-unwanted" %}
{% assign alt = "Unwanted results for insetting of a box-shadow" %}
{% assign ext = "png" %}
{% assign attributes = "figure--margins" %}
{% include responsive-image.html %}

Today, I set off to find a proper solution to the problem and it was much easier than I could have imagined. There is a fourth attribute for the box-shadow propery which controls the spread radius. By using a negative unit for the spread radius; I could actually position the shadow outside the box and then bring it back to view only for the side I want. Simple. `box-shadow: inset -12px 0 15px -10px rgba(0, 0, 0, .6);`

You can see the result in the pen below.

<p data-height="364" data-theme-id="0" data-slug-hash="JdBgWZ" data-default-tab="result" data-user="johannesholmberg" class='codepen'>See the Pen <a href='http://codepen.io/johannesholmberg/pen/JdBgWZ/'>Inset Shadow (one side)</a> by Johannes Holmberg (<a href='http://codepen.io/johannesholmberg/'>@johannesholmberg</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
