# Encryption

How do you send someone a secret message?

Perhaps you create a secret _code_ that only you and the intended recipient
will understand.

A historical example of such a "cipher" is a simple substitution of one
letter for another.

::: tip Caesar Cipher
Believe it or not Julius Caesar used a substitution cipher to protect
correspondence of military significance. Caesar's cipher shifted letters
three places, like this:

```
Input:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Output:   XYZABCDEFGHIJKLMNOPQRSTUVW

Example:  CAESAR
          ZXBPXO
```
:::

The study and use of secret codes and ciphers is called "cryptography", and
the process of applying these methods is called "encryption".

## Ralphie's Decoder Pin

Ralphie's Decoder Pin has a very simple "key" that can configured by setting
the letter dial to a corresponding number, e.g. `B-11`. When _encoding_ a
message `B` is replaced `11`, and when _decoding_ the message `11` is
replaced with `B`. Likewise, other letters are substituted for their
corresponding number.

Try decoding the message below with the key `B-11` by clicking and dragging
the dials and then clicking the `Decode Message` button.

<Encryption-DecoderPin />

How secure do you think such a simple substitution cipher is?

We could very easily try every possible key by just changing either dial to
each position and checking to see if the decoded message makes any sense.

So, simple ciphers like this one are not secure _at all_!

Luckily, modern cryptography is based on mathematical theory and computer
science and not simple substitutions. Strong encryption will resist _all_
attempts to decode the secret data without the _key_.

In this section, we will see how encryption keys work today and why
encryption is essential to data confidentiality and data integrity.
