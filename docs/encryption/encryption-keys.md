# Encryption Keys

There are a lot of ways to encrypt data, but we don't need to understand how
the encryption algorithms themselves work.

Instead we will learn encryption by application, which can be taught by what
encryption standards have in common - encryption keys.

## Symmetric Encryption

The most intuitive use of encryption uses the same __encryption key__ to both
encode and decode the data, hence the name "symmetrical".

For communication, the symmetric encryption keys are a "shared secret"
between two or more parties. Because keys are shared, we cannot be sure who
authored the data.

This feels most natural because it is pretty similar to how we use passwords.
In fact, we often use passwords and symmetric encryption keys interchangeably.

## Asymmetric Encryption

Asymmetric cryptography is also called Public-Key cryptography because
instead of using a single shared-key this method of encryption uses a _pair_
of keys: public keys which can be shared openly, and private keys which are
known only to the owner.

Public-Key encryption is "asymmetric", because instead of encoding and decoding
with the same keys, data is encoded with one key and decoded with the other.

Invented in the 1970s, public-key cryptography is truly a wonder, and today's
digital landscape would not be possible without it.

What makes public-key cryptography special?

Public-key cryptography is powerful because of the mathematical relationship
between the public and private key pair.

Data encrypted with the public key can only be decoded with the private key.
Likewise, data encrypted with the private key 
