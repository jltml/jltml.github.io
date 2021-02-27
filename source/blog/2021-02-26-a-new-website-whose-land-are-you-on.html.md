---

title: "A new website: whose land are you on?"
date: 2021-02-26 22:26 CST
tags: projects

---

tl;dr: it's [this](http://jltml.me/whose-land-is-it){:target="_blank"}

A couple days ago, I quickly cobbled together a new website, inspired by [Jonatan Heyman](https://heyman.info){:target="_blank"}'s [whatismyzip.com](https://whatismyzip.com){:target="_blank"}. I'd thought — what if you could immediately load a page and see whose land you're on (like how you can on whatismyzip with ZIP codes)? And so, after discovering that JavaScript is Not That Much Fun, I put together [this](http://jltml.me/whose-land-is-it){:target="_blank"} page, which does exactly that. It looks *very* bad right now, but hopefully I'll get it to look better here soon (though it does support dark mode? honestly people everyone should; it's not hard). Anyway, it pretty much just uses your location to:

1. give you back your location (using an API from the FCC) so the person using the website is like "ok yes it's working"
2. uses the wonderful [native-land.ca](https://native-land.ca){:target="_blank"} API to give you the territories based on your location
3. also embeds that map on the left, once again from [native-land.ca](https://native-land.ca){:target="_blank"}

So it's pretty much just a super-simplified wrapper around [native-land.ca](https://native-land.ca){:target="_blank"}. But, I mean, at the same time… how awesome is that website, right! (I mean native-land.ca, not my own.) What an incredible, meaningful application of giant datasets and mapping. My goodness, I love maps so much.
