---
layout: book
title: "The Mobile Web Handbook"
date: 2014-10-12
category: reading
permalink: reading/the-mobile-web-handbook
author: Peter Paul Koch
cover: the-mobile-web-handbook
publisher: Smashing Magazine
book-url: http://www.amazon.com/The-Mobile-Handbook-Peter-Paul-Koch-ebook/dp/B00O3EK216
intro: 'The danger is that after testing in a downloaded Google Chrome, web developers may think they’ve covered all modern Android devices. That’s not true. Your downloaded Google Chrome only tells you something about Google devices and other downloaded Google Chromes, and not about Samsung Chrome or Amazon Silk or possible future Chromium-based browsers.'
---

{% assign counter=1 %}
#### highlight {{counter}}
>If Samsung sells units to operators, there’s an extra step: the operators will want to put their own apps on the phone, and maybe customize the start screen, home screen, or even the browser. (One operator once went as far as setting the HTML <li> bullets to a color that was not even their brand color — and made sure web developers could not override it. One wonders what they were thinking.)

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>There are four browser types on mobile: default browsers, downloadable browsers, proxy browsers, and WebViews.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>Most default browsers are tightly integrated with the underlying OS, to the point where it is not possible to update the browser separately. Thus, in order to get a new Safari version you have to update iOS; the same goes for IE and Windows Phone. This causes default browsers to develop more slowly than other types of browsers, which could mean in future we have to go through another period where one old, bad default browser holds back the entire mobile web, just as IE6 held back the desktop web. Fingers crossed.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>In particular, Chrome on iOS tests are relatively useless. Although the Chrome app offers you integration with your Google account, when it comes to actually rendering webpages it must use Apple’s WebView.

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>Thus, although you can test on Chrome for iOS if you feel like it, this does not tell you anything about the real Chrome on Android, which is a completely different browser.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>Like on desktop, there are four important rendering engines on mobile: Gecko, Trident, WebKit, and Blink.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>Just like on desktop, there are four important rendering engines on mobile: Gecko, Trident, WebKit, and Blink.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>IE Mobile uses Trident. Opera Mini uses Presto, but will eventually replace it with Blink. The Chrome browsers use Blink. Firefox Mobile and Firefox OS use Gecko. UC Mini, Nokia Xpress, and the default browser on the Sailfish OS by Jolla also use Gecko.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>The danger is that after testing in a downloaded Google Chrome, web developers may think they’ve covered all modern Android devices. That’s not true. Your downloaded Google Chrome only tells you something about Google devices and other downloaded Google Chromes, and not about Samsung Chrome or Amazon Silk or possible future Chromium-based browsers.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>However, suppressing zoom is evil. Not flawed, not stupid (well, that too), but unmitigated, inexcusable evil; Sauron-like depths of evil.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>A friend of mine is a doctor. One day she was at the top floor of the hospital when her pager bleeped and she was urgently called downstairs for a resuscitation. (Her pager? Yes. The hospital hasn’t yet figured out that they could also use mobile phones for such things. But that’s another story.) While waiting for the lift to take her ten stories down she decided to briefly go through the resuscitation protocol on an app she’d recently purchased. The crucial scheme that showed all the steps was a bit too small, however, and she tried to zoom in. She couldn’t. It turned out some idiot app designer had turned off zooming; apparently, it was “not necessary.” Thus a doctor was unable to view the steps that could save her patient’s life because some silly designer’s so-called creativity couldn’t handle the threat of zooming. That’s what I mean by evil. If people zoom in on your carefully crafted page, it means they can’t make out a few details. That’s your fault, and not the users’. So don’t punish them for it.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>IE supports the meta viewport tag only on phones, and not on tablets. In addition, the tag always uses an ideal viewport width of 320px, because Microsoft wants to stay as close to the iPhone as it can. However, when you use @-ms-viewport, IE switches to its true ideal viewport — the one that best matches the device. So the following code gives you a layout viewport equal to the true ideal viewport (for instance, 364 pixels on the Lumia 820), even though the meta viewport tag gives you 320px: @-ms-viewport { width: device-width; } @-ms-viewport overrides the tag, so by using both you can make sure that IE takes on its true ideal viewport. In general, this is the best thing you can do since 320px is not always ideal for every Windows Phone device.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>While responsive design is based on the idea that one design can adapt itself to all screen sizes, in many cases progressive input enhancement requires us to write separate scripts for the input modes — see, for instance, the scrolling layer example, which essentially needs three separate scripts for mouse, keyboard, and touch.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>IE allows you to suppress the delay by using touch-action: manipulation. Now double-tap zooming is not possible, and the browser can remove the delay.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>When you’re testing responsive designs it may be useful to see the viewport width and height onscreen. Print out document.documentElement.clientWidth/Height. Make sure to do it again onresize and onorientationchange; these events usually fire when the viewport dimensions change.

[highlight {{counter}}](#highlight-{{counter}})

{% assign counter=counter | plus:1 %}
#### highlight {{counter}}
>Do not fall into the trap of assuming that a user on 3G has a slow connection speed, or that a user on Wi-Fi has a fast one. Connection type is not a proxy for connection speed.

[highlight {{counter}}](#highlight-{{counter}})