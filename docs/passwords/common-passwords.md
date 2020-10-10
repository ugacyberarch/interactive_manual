# Common Passwords

Best practice is to avoid using common passwords. A simple technique for
someone trying to break into an account is to try a list of frequently used
passwords.

Pretend for a moment that you are trying to create your own list of the most
common passwords. The game below allows you to do just that. Guess up to ten
passwords and see how popular they are.

The score for each password corresponds to how many times that password has
been seen in recent data breaches [][1].

You may be surprised; the reference list contains over 500 million passwords.

## "Survey Says!"

<Password-FamilyFeud size="10"/>

## Takeaways

Personal does not always mean unpredictable. Try guessing a pet's name and
appending the day of the month you were born. Was it in the list?

Remember that attackers do not have to try every password by hand; they often
use programs to automatically try passwords. We'll talk about this more when we
discuss password complexity.

You may have also noticed that, although you typed your password into a box
that hid the text you entered, it was displayed in clear text on the
scoreboard.

::: warning

<Password-Hover />

It is a common misconception that **password** inputs are private or hidden. In
truth, whatever you type is visible to the website.

These special input fields **only** protect you from "shoulder surfing".

_Try hovering your mouse over the password field above._
:::


## Attribution

Unfortunately, data breaches happen every day. The password list used in the
game above was composed by Troy Hunt and is a compilation of passwords found on
**real accounts**.

Visit [haveibeenpwned.com] to see if your **e-mail address** was found in one
of the data breaches, or to learn more about the password list itself.


[1]: https://haveibeenpwned.com/Passwords
[haveibeenpwned.com]: https://haveibeenpwned.com/
