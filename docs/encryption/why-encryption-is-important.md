# Why Encryption is Important

Why do we need to send secret messages?

This is a challenging topic for many people. It might feel like there is
something inherently dishonest about "secret messages", but that couldn't be
further from the truth.

_Encryption is about honesty and trust._

## Confidentiality

We might be better served by saying "confidential information" instead of
"secret messages", it doesn't have the same negative connotation.

Today we do everything from shopping and banking online to e-mailing our
bosses about trade secrets. Of course we need _confidentiality_ online.

It is absolutely critical that we prevent sensitive data from being
intercepted or stolen, and to do that we need encryption.

We "keep" _honesty_ by denying unauthorized access to sensitive information.

## Integrity

It is somewhat less intuitive that encryption is not only about encoding data
but also about authenticating data.

How do you know that the data you receive is from who you think? How do you
know the data is intact? Was something important changed or omitted?

We will see how "public-key cryptography" allows you to verify and trust the
integrity and authenticity of the data you receive.

## Threat Model

We said that encryption is necessary to prevent intercepting and stealing data,
but we have not discussed why those risks exists.

Threat modeling is a popular way to graphically conceptualize how vulnerable you
are to a hypothetical "attacker".

So let's consider your risk. Below is a model of how most people access the
internet from home. Click on each component to explore how your data might be
intercepted or stolen.

<Encryption-ThreatModel />

## Takeaways

We will talk about one way that encryption can be abused when we discuss the
threat of Ransomware, but it is important to remember why encryption is
important:

- Confidentiality
- Integrity
