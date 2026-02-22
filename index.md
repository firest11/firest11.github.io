---
layout: default
title: Home
---

Welcome — this is my personal site. I use this space for my CV and to publish short posts about projects.

## Latest posts

<ul>
{% raw %}{% for post in site.posts %}{% endraw %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%b %-d, %Y" }}</small></li>
{% raw %}{% endfor %}{% endraw %}
</ul>
