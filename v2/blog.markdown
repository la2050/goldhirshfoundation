---
title: Blog
position: 13
layout: main
---

Blog
===========

<p>Post 1 to {{ site.posts.size }} of {{ site.posts.size }}</p>

{% for post in site.posts %}

<h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
<p>
  Posted by
  <a href="/about/#{{ post.author | downcase | replace: ' ', '-' }}">{{ post.author }}</a> on {{ post.date | date: "%B %-d, %Y" }}
</p>

<p>
  {{ post.excerpt }}…
  <a class='more' href='{{ post.url }}'>Read More</a>
</p>

{% endfor %}
