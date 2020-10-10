# Reusing Passwords

Undoubtedly, you have encountered a website sign-up that required you to use a
combination of capital letters, numbers, and even symbols.

Oh, and don't forget it has to be 8 characters or longer:

::: danger Error
 - must contain one upper case letter [A-Z]
 - must contain one lower case letter [a-z]
 - must contain one number [0-9]
 - must contain one symbol (e.g. &%$ ...)
 - **minimum length of 8**
:::

While this is not bad practice, it can be excessive and extremely frustrating,
without adding a lot of security. _Users tend to do the same, predictable,
things, like capitalize the first letter, or append their birthday._

We just learned not to use common passwords, but before we talk about why
websites want to force you to have complex passwords, let's talk about
something that can be more risky &mdash; **using the same password across
websites**.

No one wants to remember a dozen passwords, and those infuriating requirements
for passwords make it all the more likely for someone to just start reusing the
same password for everything.

**Why is reusing a password such a bad thing?**

## Website Logins

Here is a riddle you may have heard:

> If you have it, You don't share it  
> If you share it, You don't have it  
> What is it?

We dispelled the misconception that password fields are specially protected or
private.  Moreover, we know that if the site uses `http://` instead of
`https://`, all the computers between ours and the website can also see your
password.

Suppose that the website does support encryption. Instead of the analogy being
mailing a key, we are in fact mailing a lockbox, with your key inside, that
only the website should be able to open. Would that keep your key a secret?

**Are your passwords really secret?**

<Password-Login-Animation />

The server sees exactly what you input.

Once shared, a secret is no longer a secret. We share our password with the
website's server.  Anyone that has or gains sufficient access to that server
can discover your password.

Once one account is compromised, those same credentials can be used to login
to any service where you reused them.


## Password Resets

Most of us have one primary e-mail address.

Should you ever forget your username or password for a website or service you
use, all you have to do is click `Forgot password?` and reset it, right?.


Well, that pretty much means that the password for your primary e-mail account
is the nuclear launch codes of your personal security online.

We've seen why you don't want to use predictable passwords and why you
shouldn't reuse passwords. This is particularly important when it comes to
accounts that allow you to reset passwords.

Be vigilant. Protect your e-mail passwords earnestly. Make them strong, and
be very sure not to reveal them to anyone.

## Takeaways

Take extra care to protect your primary e-mail account.

Prefer `https://` to `http://`.

Keep your passwords secret but remember they are not entirely secret.  You
expose your password to every service you use it on, and should any one of them
be compromised, or should that password be intercepted, all your accounts can
fall like dominoes.
