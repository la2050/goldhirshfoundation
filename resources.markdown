---
title: Resources
layout: default
---

<div class="row">
  <div class="span12">
    <h2 class="title">Financial Capital Opportunities</h2>
    <h4>Amplifying opportunities for social innovation</h4>
    <div id="three-column-table" class="three-column-table clearfix">
      <div class="table-row table-head clearfix">
        <div class="col-md-3">Organization</div>
        <div class="col-md-3">Description</div>
        <div class="col-md-3">Deadline</div>
      </div>
      <div class="table-content">

        {% assign collection_name = "opportunities" %}

        {% comment %} Get data from a spreadsheet {% endcomment %}
        {% assign data_list = site.data[collection_name] %}

        {% comment %} If a spreadsheet doesn’t exist, use markdown files instead {% endcomment %}
        {% unless data_list and data_list.size > 0 %}
          {% assign data_collection = site.collections | where: "label", collection_name | first %}
          {% assign data_list = data_collection.docs | sort: "position" %}
        {% endunless %}

        {% for data in data_list %}

        <div class="table-row clearfix">
          <div class="col-md-3"><a href="{{ data.details_url }}">{{ data.title }}</a></div>
          <div class="col-md-3">{{ data.content | strip_html }}</div>
          <div class="col-md-3">{{ data.date | date: "%B %-d, %Y" }}</div>
        </div>

        {% endfor %}
      
      </div>
      <div class="table_navigation page_navigation "></div>
    </div>
  </div>
</div>

<div class="row">
  <div class="span12 speaking-engagements">
    <h2 class="title">Speaking Engagements</h2>  
    <h4>Past and Upcoming Team Goldhirsh Speaking Engagements</h4>        
    <div class="pagination-list " id="pagination-list ">
      <div class="pagination-content ">

        {% assign collection_name = "speaking" %}

        {% comment %} Get data from a spreadsheet {% endcomment %}
        {% assign data_list = site.data[collection_name] %}

        {% comment %} If a spreadsheet doesn’t exist, use markdown files instead {% endcomment %}
        {% unless data_list and data_list.size > 0 %}
          {% assign data_collection = site.collections | where: "label", collection_name | first %}
          {% assign data_list = data_collection.docs | sort: "position" %}
        {% endunless %}

        {% for data in data_list %}

        <div class="speaking pagination-item ">
          <div class="press-date pagination-date ">
            {{ data.date | date: "%B" | truncate: 3, "" }}
            <div class="clear"></div>
            <span class="press-day">{{ data.date | date: "%-d" }}</span>
            <div class="clear"></div>
            {{ data.date | date: "%Y" }}
          </div>
          <p class="speaking-text">
            {% if data.details_url %}
              <a href="{{ data.details_url }}">
                {{ data.title }}
              </a>
            {% else %}
              {{ data.title }}
            {% endif %}
          </p>
          <div class="clear "></div>
        </div>

        {% endfor %}

      </div>
      <div class="pag-list page_navigation"></div>
    </div>
  </div>
</div>

<p class="table-break">
  Would you like to add something to the list? Email us at <a href="mailto:team@goldhirshfoundation.org">team@goldhirshfoundation.org.</a>
</p>

<div class="row">
  <div class="span12">
    <h1 class="title">Resources</h1>
  </div>
</div>
<div class="row">
  <div class="span12 resources-text">
    <p>The Goldhirsh Foundation is committed to supporting social <em>innovation</em> in Los Angeles. Below find a number of resources around <em>social innovation</em>, <em>impact investing</em>, and <em>fundraising</em>.</p>
  </div>
</div>
<div class="row">
  <div class="span12 resources-container">
    <div class="row">
      <div class="span4 resources-cta" markdown="1">
        <div class="image-wrapper"><img src="/assets/files/1432/capitol-dev.png" /></div>
        <div class="clear"></div>
        <p class="resources-cta-title">1. Publications around capital development</p>
        <div class="clear"></div>
        <p class="resources-cta-intro">From capital development to crowdsourcing technologies, we are always learning. Here is a list of publications we found helpful.</p>
        <div class="clear"></div>

*   [A Sense of Purpose](https://www.blackrock.com/corporate/en-us/investor-relations/larry-fink-ceo-letter)
*   [Space to Lead (2017)](http://www.futurecitiesla.org/space_to_lead_focla?utm_campaign=eventfollowup&utm_medium=email&utm_source=futurecities)
*   [The Op\-Ed Project: Op\-Ed Writing Basic Tips and Tricks](https://www.theopedproject.org/oped-basics/)
*   [This Might Be the Best Idea for Turning Out More Voters in U.S. Elections (2017)](http://nymag.com/daily/intelligencer/2017/07/making-voting-more-engaging-might-make-more-people-vote.html)
*   [Crowdsourcing: Practical Insights for Entrepreneurs, Investors, and Philanthropists (2015)](http://la2050.s3-us-west-1.amazonaws.com/comfy/cms/files/106/files/original/TaraRothToolsforCrowdsourcing.pdf)
*   [Evolution of an Impact Portfolio: From Implementation to Results (2014)](http://www.sonencapital.com/evolution-of-impact.php)
*   [Insights from a Decade of Philanthropic R&D (2017)](https://durfee.org/durfee-content/uploads/2016/10/Durfee-What-If-Report-FINAL.pdf)

      </div>
      <div class="span4 resources-cta" markdown="1">
        <div class="image-wrapper"><img src="/assets/files/1433/currently-reading.png" /></div>
        <div class="clear"></div>
        <p class="resources-cta-title">2. CURRENTLY READING</p>
        <div class="clear"></div>
        <p class="resources-cta-intro">Our team is always learning and sharing. Here is a list of books we are currently reading. For real-time updates, <a href="https://twitter.com/GoldhirshFdn/goldhirsh-foundation-team/members" target="_blank">follow the team on twitter</a>.</p>
        <div class="clear"></div>

*   [The 48 Laws of Power](https://ls2pac.lapl.org/?section=resource&resourceid=6170941)
*   [The Upside of Your Dark Side](https://ls2pac.lapl.org/?section=resource&resourceid=893534792)
*   [The Rise and Fall of Urban Economies](https://ls2pac.lapl.org/?section=resource&resourceid=1100384479)
*   [The End of the Suburbs](https://ls2pac.lapl.org/?section=resource&resourceid=687503806)
*   [Contagious](https://ls2pac.lapl.org/?section=resource&resourceid=648914865)
*   [10 Day MBA](https://ls2pac.lapl.org/?section=resource&resourceid=21785586)
*   [The Airbnb Story](https://ls2pac.lapl.org/?section=resource&resourceid=1362158604)
*   [Personal History](https://ls2pac.lapl.org/?section=resource&resourceid=25571206)

      </div>
      <div class="span4 resources-cta" markdown="1">
        <div class="image-wrapper"><img src="/assets/files/1434/toolkit.png" /></div>
        <div class="clear"></div>
        <p class="resources-cta-title">3. Innovative tools we love</p>
        <div class="clear"></div>
        <p class="resources-cta-intro">We are constantly learning about new and innovative tools to help nonprofits and for-profits succeed in their latest ventures. Here is a list of tools we love:</p>
        <div class="clear"></div>

*   [Spark Adobe](https://spark.adobe.com/)
*   [Omaze](https://www.omaze.com)
*   [CrowdFunder](https://www.crowdfunder.com)
*   [Thunderclap](https://www.thunderclap.it/)
*   [ImpactBase](http://www.impactbase.org)
*   [OpenIDEO](https://openideo.com)
*   [IOBY](https://www.ioby.org)
*   [Data USA: Los Angeles](http://datausa.io/profile/geo/los-angeles-county-ca/)

      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="span12">
    <p class="add-to-list">For inquiries please email us at <a href="mailto:team@goldhirshfoundation.org">team@goldhirshfoundation.org</a>.</p>
  </div>
</div>
