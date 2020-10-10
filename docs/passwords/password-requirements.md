# Password Requirements

Everyone can agree that complicated passwords do not make your life any
easier.

Although, complicated passwords _can_ make your accounts more secure.

**Do passwords have to be complicated to be secure?**

::: tip Question
Which password is _stronger_?

**`scrubwithsoaptocleanwell`** or **`P1ckl3$`**
:::

_Wait, was the 'K' capitalized? Did I use a one for the 'I' or the 'L'?_

We will see that strong does not always mean complicated.

So, why do websites make you use numbers, capitals, and special characters?
Why do they enforce a minimum length?

Hold on.

**How do we even measure password "strength"?**


## Complexity

Suppose you were given a phone protected by a 4-digit PIN. How long would it
take you to try every number?

Password strength is measured by how long it would take a _computer_ to try
every possibility.

<Password-Phone />

Four-digit passwords are _not_ secure if you are allowed to keep guessing. You
can guess them all very quickly!  Fortunately, most devices and services don't
allow you to make unlimited guesses. They may make you wait before your next
guess, or they may just lock your account.

However, when you create a password, you can never be sure how many times an
attacker will have to guess your password.

A password is *strong* if, given an unlimited number of guesses, it would still
be very difficult to guess.

## Money Y'all

Guessing a 4-digit PIN is as simple as counting from 0000 to 9999. Let us
consider something harder.

How long would it take a computer to guess today's _Money Y'all_ lottery
numbers?

_Money Y'all_ is similar to, but a bit different than, the real lottery.
Numbers can be repeated, and you have to guess the numbers in the correct order
\- like a password or PIN.

Each of the five regular balls is a number from 1 to 69. The "Y'all Ball" is a
number 1 to 26.

::: tip How many possible numbers are there?

(69 x 69 x 69 x 69 x 69 x 26) = 40,664,815,074

Don't think too much about how the math works; it is just the number of
possibilities for each position multiplied across. The same is true for the
passwords you create.

That is a lot more than the number of 4-digit PINs (0000 ... 9999):

(10 x 10 x 10 x 10) = 10,000

:::

How fast could a computer find the winning numbers?

That depends on how many guesses your computer can make. A very fast computer
could guess billions of times per second.

<Password-Lottery />

## Strong Passwords

We went from 10 thousand possible PIN numbers for a phone, to over 40 billion
possible lottery numbers, and still, a very fast computer could guess every
possible choice in a very short amount of time, almost instantly.

Guessing your password needs to be even more difficult than winning the
lottery.

How can that be possible?

Computers do have limitations. Only a very fast computer can test 10 billion
passwords per second, and we will see that, even at that incredible speed, it
is not difficult to create passwords that are very hard to guess; passwords
that would take hundreds and thousands of years to guess.

You can enter your own password, or maybe try the passwords we talked about
before (`P1ckl3$` and `scrubwithsoaptocleanwell`).  The difference may surprise
you.

<Password-HSIMP />

## Takeaways

Good passwords do not have to be complicated. Try to be creative and
create memorable passwords that would take a very long time to guess.

You cannot be sure how many guesses can be made for your password.

A password is strong if it would take a very fast computer a very long time to
guess.

## Attributions

Thank you to [howsecureismypassword.net] for inspiration and the code used for
explaining password strength.

[howsecureismypassword.net]: https://howsecureismypassword.net/
