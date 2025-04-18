---
layout: page
permalink: /teaching+service/
title: teaching+service
description: Courses I have helped teach and conferences I have reviewed for over the years.
nav: true

nav_order: 2
display_categories: [Yale, Georgia Tech]
horizontal: false
---

  <div class="teaching+service">
    {% if site.teaching != blank -%} 
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
      {%- assign teaching = site.teaching | reverse -%}
      {% for item in teaching limit: teaching_size %} 
      <span style="color:black">
        <tr>
          <th scope="row">{{ item.date | date: "%b %Y" }}</th> {% comment %}<th scope="row">{{ item.date | date: "%b %Y" }}</th>{% endcomment %}
          <td>
            {% if item.inline -%} 
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {%- else -%} 
              <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {%- endif %} 
          </td>
        </tr>
        </span>.
      {%- endfor %} 
      </table>
    </div>
  {%- else -%} 
    <p>No experience so far...</p>
  {%- endif %} 
  </div>

{% comment %}
At Yale, I have worked as a Graduate Teaching Fellow for both CPSC547: Cryptography and CPSC513: Computer System Security at Yale. I previously also worked at the Office of Career Strategies at Yale mentoring students.

At Georgia Tech, I was a Graduate Teaching Assistant for CS6260: Applied Cryptography and CS3251: Computer Networks over the 2020-21 school year.
{% endcomment %}
