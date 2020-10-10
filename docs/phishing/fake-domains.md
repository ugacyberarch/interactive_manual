# Fake Domains

Since the "dot com boom" of the 90s, **domain names** have been an
ever-increasing part of daily life.

**What is a "domain name"?**

- facebook.com
- www.google.com
- www.bbc.co.uk
- en.wikipedia.org


Domain names, sometimes called _hostnames_, are the identifiers we give to
systems on the internet. For a few dollars a year, you can register your own
domain as easy as ordering a new pair of shoes.

One common way that phishing e-mails attempt to trick recipients is by using
domain names that look legitimate but actually lead to counterfeit websites
created solely to steal your information.

::: danger Phishing Domain
Here is an example of a domain that was used to phish for PayPal accounts:

**paypal.com.9kcj.pw**
:::

**How can you tell that `paypal.com.9kcj.pw` is a fake domain?**

You clearly see it contains `paypal.com`, and then you might think the rest is
just some technical bit you don't need to worry about.

Alas, the `paypal.com` at the beginning does _not_ mean PayPal owns the domain.
Anyone can add `paypal.com` to the _front_ of their domain name! The end of a
domain tells you who controls it.

::: tip Reading Domain Names

You must read domain names right-to-left, separating on the "dots", to
understand ownership.

For example, if you read `www.facebook.com` from right to left, you see that
`com` controls `Facebook`, which controls `www`.

:::

So, when you read the domain `paypal.com.9kcj.pw` from right to left, you see
that `pw` controls `9kcj`, which created a fake extension `paypal.com`.

Most companies use a single "top-level" domain, (e.g. `.com`, `.net`, or
`.org`).  Be wary if you expect the domain to end in `.com` but it actually
ends in something obscure, like `.pw`. 

That may seem rather confusing, but it all becomes clear when you understand
how domains are created.

## Domain Hierarchy

Domains names are logically a tree. The first level of domains, called
"top-level domains", are actually the suffix of the domain name. You will
recognize many of them, such as `com`, `net`, and `org`.

The next level, "second-level", are what individuals and companies purchase.

All of the domains below this are controlled by whoever owns the second-level
domain.

Try adding `paypal.com` to the _beginning_ of any other domain. Does that
change the real `paypal.com`? Does it belong to PayPal?

<Phishing-Tree />

## Phish / Not Phish

Adding a fake prefix is not the only trick criminals use. Below is a guessing
game.  Would any of these phish fool you?

<Phishing-GuessingGame />

## Takeaways

Don't trust a domain simply because it starts with an official name.

Domain ownership is applied right-to-left, and if you are ever in doubt think
about it as a tree.

Be wary of domains that end in a top-level you didn't expect (e.g. `.co`
instead of `.com`).

## Attributions

The phishing domains shown were selected from [phishtank.com], a free database
of Phish.

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

[phishtank.com]: https://www.phishtank.com/
