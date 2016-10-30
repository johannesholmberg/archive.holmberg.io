---
layout: post
title: "Takeaways from Smashing Conference Barcelona"
---

{% assign filename = "smashingconf" %}
{% assign alt = "Conference" %}
{% include responsive-image.html %}

I finally managed to find some time and attend another conference within my field of work. I chose to go to Barcelona and attend the [Smashingconf](https://smashingconf.com/barcelona-2016/) this week.

I think the conference struck a perfect balance of design and technology. It was engaging and I left it with a feeling of inspiration and motivation. I also got to meet some new friends from all corners of the world. I took notes during the talks to kind of summarize my experience.

## Day 1, October 25th 2016

### To Hell for Type – Marcin Wichary

- There must be compromises, not loading a web font can be worth it for the performance.

### Designing Meaningful Animation - Val Head

- Use the [12 principles of animation](http://the12principles.tumblr.com/).
- CSS default transition timing keywords are very limiting, use `cubic-bezier` instead.
- Similar objects should be animated in similar ways.
- Create a sense of choreography.
- Animation has the ability to create an impression of reduced load times.

### Designing for Display - Jessica Svendsen

- There are two types of designers in New York. Those who design systems and those who design content.
- “Clarifying is our business, obscuring is our pleasure.”
- “I’m always trying to turn things upside down to see if they look any better.”
- The best jobs require the least amount of recruitment.
- Only work with designers who have a point of view about design. And are willing to fight for it.
- Be a generalist for as long as possible.
- Avoid briefs or people who asks you to “make something beautiful.”
- Someone will always be technically better than you. It’s your ideas that matter.
- Just because you can doesn’t mean you should.
- Make sure what you’re making is meaningful.


### How to Find What Design Factors Influence Conversion Rates - Tammy Everts

- Performance changes peoples perception of your site.
- The exact same website; a slower experience leads to huge negative impact.
- Poor performance affects how people perceive your brand.
- Conversion is just one part of the relationship with your customers.
- It’s hard to draw a straight line from performance to your business.
- Which metrics matter?
- The web is the web. People don’t compartmentalize what kind of experience they get.
- Most important metrics for Amazon is start render and repeat visits.
- Direct traffic is more patient. Traffic through search is slightly less patient. Traffic coming from Facebook is highly likely yo drop off if website is slow. Performance is perception.
- Pages with more scripts are slightly less likely to convert.
- The number of DOM elements matter a lot.
- Sessions that convert has fewer images than those who don’t.
- A two second improvement in median load time almost doubled conversion.
- Every site and app is different.
- Performance issues are unpredictable.
- Even small design changes can make a big difference.


### The Tail and its Dog - Stephen Hay

- Start with storytelling before making the components it consists of.
- Ask yourself, “What if?”
- Try to use [oblique strategies](https://en.wikipedia.org/wiki/Oblique_Strategies).
- Ask yourself, “What problem does this solve?”
- “How can we tell this story differently?”
- Clients don’t understand components. Clients understand screens.
- Zoom out to get the bigger picture.
- We get too involved in the little bits.
- Don’t forget the screen.
- Let’s only talk about the problem. Sameness will disappear if we explore the problems.


### How Testers Can Be a Liability for Your Team - Ulrika Malmgren

- Testing is a bit like being a detective.
- Everyone relaxes when a tester is on the team.
- You don’t test quality in – you need to build it in.
- Work on your communication.
- How well you can trust your team members affect performance.
- See testers as ambassadors for quality.


### A Smashing Case Study - Sara Soueidan

- Not only should the image be a good candidate for SVG, but SVG should also be a good candidate for the image.
- Use object for SVG when it needs to have real text as fallback.
- Referencing an SVG within inlined SVG for accessibility reasons since SVG code could bloat the markup.
- When you’re using a div, you lose the relationship between elements in the document.
- Markup is everything.
- Think about it from a no-CSS perspective.
- The web is accessible by default.
- Give SVG’s a textual context by providing a title.
- Don’t treat accessibility as an afterthought.
- Test accessibility on a component level.


### Resilience - Jeremy Keith

- HTTP, URLs and HTML was the underlying principles for the WWW-project.
- The fault tolerance of HTML is what allows it to grow.
- JavaScript is the most fragile part of the stack.
- Give yourself technical credit by creating a robust foundation and enhance from there.

{% assign filename = "smashingconf2" %}
{% assign alt = "Conference" %}
{% assign caption = "The amazing venue at Palau de la Música Catalana." %}
{% include responsive-image.html %}


## Day 2, October 26th 2016

### Predicting the Future - John Allsop

- Be careful of what must change for your predictions to come true.
- Native apps are a remnant of the Jurassic period of computer history, a local maximum that is holding us back.


### Selling Design Systems - Laura Elizabeth

- Style guides can be time consuming monsters so you’ll really want to make sure it’s going to be worth the investment.
- Smaller teams doesn’t have the same need for a design system.
- Design systems are only valuable if kept up to date.
- If it’s working for you, don’t change your ways just because everyone else is doing it.
- It’s pointless having a pattern library if nobody uses it.


### Responsive Web Apps with Container Queries - Jonathan Snook

- Designers see a feature through all platforms.
- Goal #1 – Evolve the design. Goal #2 – Support multiple devices.
- Can anybody within the team change features?
- Each page can be art directed individually.
- Web applications have components in multiple contexts needing to respond differently.
- With container queries, you only have to know the interplay within a single object.
- Allow anyone to make product-wide design changes quickly and easily.
- Make the right things easy and the wrong things hard.


### Real Art Direction on the Web - Jen Simmons

- Art direction gives you a sense of what the experience will be.
- Don’t make a framework out of CSS Grid.
- CSS Grid _is_ a framework - built directly into the browser.
- CSS – That’s how you make your layout fast!
- It works and it doesn't work at the same time. It’s quantum CSS.


### Designing Choice - Adrian Zumbrunnen

- The way we ask questions changes the answers we get.
- The value of an option is defined by its surroundings.
- Friction can improve design and make people more deliberate.


### Conversion Rate Optimization Techniques in eCommerce - Christian Holst

- 68.81% cart abandonment rate.
- Top reason is that extra costs are too high.
- Average sites have 39 basic checkout problems.
- It’s not the number of steps in a checkout flow which has negative impact.
- Most important is what users have to do and how they’re asked to do them.
- Form fields matter more than steps.
- 46% of checkout forms require a phone number.
- 11.6% misinterpret a review step for an order receipt.
- Can lead to permanent brand damage.
- Have a second "Place Order" button at the top of the page.
- 18.75% of all user accounts abandoned.


### The Website Obesity Crisis - Maciej Ceglowski

- “Kudos to Apple for the two middle fingers they always give to the web.”
- Website obesity is a universal problem for online journalism.

{% assign filename = "smashingconf4" %}
{% assign alt = "" %}
{% assign attributes = "margins" %}
{% assign caption = "Walking with friends at the typography walk. Photo credits <a href='https://www.instagram.com/itzrachelle/'>itzrachelle</a>." %}
{% include responsive-image.html %}
