# Fake Links

Many phishing attacks deceive their victims with a very simple trick. They
show a link that looks legitimate but does not go where you might expect.

::: danger Does this link go where you expect?
  [http://paypal.com/account]
:::

[http://paypal.com/account]: https://en.wikipedia.org/wiki/Phishing

Websites, and many of the e-mails you receive use a special format called HTML
that allows you to add structured and interactive elements.

For example, if you wanted to make a table:

<Phishing-HTMLTable />

Those odd things wrapping the real content, like `<table>` and `<tr>`, are
called "tags". You may have deduced that `<table>` indicates the beginning of
our table and `</table>`, with the extra slash, marks the end. Likewise with
the table rows and table data.

HTML is just a standard we started using, nothing magical, it is as arbitrary
as which side of the road we drive on and similarly unlikely to change anytime
soon.

It is important to remember that there is a disconnect between what your
computer receives and what it shows you; especially when it comes to the links
you see and click.

**So, how do HTML links work?**

Links in HTML are created with `<a> </a>` tags, but they also have an
additional `href` attribute that says where the link takes you.

That is the most important part. What a link says, and where a link goes is not 
always the same.

## The `<a>` Team

Try it for yourself. You can make your own link that goes anywhere you want and
says anything you want.

<Phishing-EditLink />

## Hovering

Savvy users know that by pointing to a link, but not clicking it, you may get a
clue to where it will take you. Try hovering over the `Click HERE!` link below.

<Phishing-Window url="http://example.com">
  <Phishing-StatusBar href="http://example.com/test" content="Click HERE!" />
</Phishing-Window>

Check the bottom of your own browser window when you hover over a link, it may
show something similar.

It is an excellent idea to "look before you leap", but unfortunately even the
status bar is not completely trustworthy. Try clicking the link, it won't take
you where it says!

Why did we even bring it up? Well, we don't want you to have a false sense of
security. There is really one authority for where you are and where you end up,
and that is the **address bar**:

<Phishing-Window url="Search Google or type a URL" />

## URLs

Clicking a link makes your browser go to another address. Addresses can also be
copied or typed directly into the address bar.

The address bar is pretty flexible, but it does require some understanding of a
web standard called URLs (Uniform Resource Locators) to use.

Wait, "links", "addresses", "URLs"?

Links are what we actually click on; they take us to an address, which is also
called a URL. Don't worry about it, you can call them "links", "addresses", or
"URLs".

The important part is you understand how to read the address bar to determine
if you are where you expect to be. So, let's decipher a URL.

<Phishing-URL />

## Searching

The way we use the internet has been completely changed by "search engines". A
lot of people navigate the internet by searching for every website they use.

<Phishing-Window url="https://www.google.com">
  <Phishing-Search />
</Phishing-Window>

In fact, browsers have acknowledged this trend and have integrated search into
the address bar. Perhaps you remember just a few years ago when browsers had
two separate fields, and we used the field on the right side to search.

Now that you know how the address bar works, instead of searching, you might
try to type out important domain names instead of searching for them.

For example, instead of searching for <code>PayPal</code>, go ahead and add
<code>.com</code> so you go directly there.

Malware and malicious plugins have been known to show fake search results so
that you mistakenly go to a bad website.

## Address Bar

Imagine for a second that your bank is on the 4<sup>th</sup> floor of a
building. You will likely use the elevator to reach your bank.  So, you get
into the elevator and you press the button. The doors close, the elevator takes
you up, and the doors open.

_How do you know that you are actually on the floor you want to be on?_

In many ways, links on webpages and in your e-mail are like the buttons inside
an elevator. You click the link and you expect it to take you to the right
place.

You might also look for confirmation that you are where you want to be &mdash;
perhaps a placard that shows the floor you are on, maybe there is an indicator
above the doors, or maybe you will just look out and see if it looks like your
bank.

<Phishing-Window url="http://office-building.com/ground-floor">
  <Phishing-Elevator />
</Phishing-Window>

Unfortunately, and this is the most valuable lesson for protecting yourself
from Phishing attacks, you cannot trust the buttons you click nor the way the
website looks when you arrive.

You must be perpetually skeptical.

You are the target of a grand heist. They have switched the buttons inside the
elevator and when the door opens it actually looks like your bank. You may
think they redecorated a little, but in fact, the entire floor is a fake,
designed entirely to dupe you.

While it would be far-fetched in the real world to build a fake bank, it is
entirely possible to create a fake banking website.

_How do you know you are actually on the website you want to be on?_

You must check your address bar!

The difference between `https://chase.com-onlinebanking.com/` and
`https://chase.com` could be your life savings.

## Takeaways

Don't trust what a link says.

Find the domain name in a URL.

Always check the URL in the address bar.
