---
layout: home
title: Home
pagination:
  enabled: true
  per_page: 5
  permalink: '/page/:num/'
---

Welcome — this is my personal site. I use this space for my CV and to publish short posts about projects.

## Latest posts

<section class="post-index">
  {% for post in paginator.posts %}
    <article class="post-excerpt">
      <h3 class="excerpt-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p class="excerpt-text">{{ post.excerpt | strip_html | truncate: 220 }}</p>
    </article>
  {% endfor %}
</section>

<nav class="pagination">
  {% if paginator.previous_page %}
    <a class="newer" href="{{ paginator.previous_page_path | relative_url }}">&larr; Newer</a>
  {% endif %}
  {% if paginator.next_page %}
    <a class="older" href="{{ paginator.next_page_path | relative_url }}">Older &rarr;</a>
  {% endif %}
</nav>
