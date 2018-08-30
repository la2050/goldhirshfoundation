---
title: Blog
stylesheets:
- "/assets/css/blog.css"
---

Blog
===========

{% for post in site.posts %}

<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<p>
  Posted by
  <a href="/about/#{{ post.author | downcase | replace: ' ', '-' }}">{{ post.author }}</a> on {{ post.date | date: "%B %-d, %Y" }}
</p>

<p>
  {{ post.excerpt }}…
  <a class='more' href='{{ post.url }}'>Read More</a>
</p>

{% endfor %}
