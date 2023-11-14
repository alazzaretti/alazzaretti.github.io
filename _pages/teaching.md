---
layout: page
permalink: /teaching/
title: teaching
description: Courses I have helped teach over the years.
nav: true
nav_order: 2
display_categories: [Yale, Georgia Tech]
horizontal: false
---
{% comment %}
At Yale, I have worked as a Graduate Teaching Fellow for both CPSC547: Cryptography and CPSC513: Computer System Security at Yale. I previously also worked at the Office of Career Strategies at Yale mentoring students.

At Georgia Tech, I was a Graduate Teaching Assistant for CS6260: Applied Cryptography and CS3251: Computer Networks over the 2020-21 school year.
{% endcomment %}


  <div class="teaching">
    {% if site.teaching != blank -%} 
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
      {%- assign teaching = site.teaching | reverse -%}
      {% for item in teaching limit: teaching_size %} 
        <tr>
          <th scope="row">{{ item.date | date: "%b %Y" }}</th>
          <td>
            {% if item.inline -%} 
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {%- else -%} 
              <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {%- endif %} 
          </td>
        </tr>
      {%- endfor %} 
      </table>
    </div>
  {%- else -%} 
    <p>No experience so far...</p>
  {%- endif %} 
  </div>	