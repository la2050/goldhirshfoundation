---
title: Blog
stylesheets:
- "/assets/css/blog-list.css"
---

Blog
===========

<ol>

{% for post in site.posts %}

<li>
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="author">
    Posted by
    <a href="/about/#{{ post.author | downcase | replace: ' ', '-' }}">{{ post.author }}</a> on {{ post.date | date: "%B %-d, %Y" }}
  </p>

  <p>
    {{ post.excerpt | remove: '<p>' | remove: '</p>' }}…
    <a class='more' href='{{ post.url }}'>Read More</a>
  </p>
</li>

{% endfor %}

</ol>
