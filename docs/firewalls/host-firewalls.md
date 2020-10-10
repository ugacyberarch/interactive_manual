# Host firewall
When you send an e-mail or any file from your device (computer, mobile, etc.)
the data is divided into packets and then sent to the recipient. At receiving
end, the packets are collected and again reassemble to get actual content as
sent by the sender. For instance, if you are living in Atlanta and you want
to send a gift to your uncle staying in California. Suppose your parent gave
you fixed-size packets and tell you to pack in these packets only. On packing
you courier it. Your uncle receives the packet. On receiving the packet, he
checks if the intended receiver is him, the number of packets are correct and
is sender is you. If everything is right, then he accepts it.

<Firewalls-sendEmail />

However, sometime the packet which you are receiving may have malicious
content. Taking forward our previous example, if you sent 3 packets to your
Uncle, but he receives 4 packets. The 4th packet is identical with other 3 in
a sense, it contains your name as sender and uncle's name as a receiver.
Suppose your uncle is fastidious and he knows you have sent only 3 packets.
He, therefore, rejects the 4th packets. Precisely this is the work of
firewall. The way your uncle checks for all things before accepting, i.e. he
follows some policies for deciding on whether to accept the packet or not, in
similar way firewall also has some set of policies upon which it decides
wether to accept or reject network packet received.

## Software Firewall
In your system, the firewall is the bit of code installed while you install
Operating System. On Windows,Linux and MacOS, firewalls are installed
before-hand. Firewall is a software running on each system and is called a
host level or software firewall. A host-level firewall protects you from both
ways. It monitors incoming as well as outgoing data based on the defined set
of rules. Host-level firewall is mostly a software firewall as it is insane
to have a separate hardware firewall for each host.

<Firewalls-softwareFirewall />

## Policies
Firewalls has a set of defined rules, on which it takes a decision on which
data packet to accept and which data packet to reject. This set of rules are
called 'policies.' The policies can be user-defined or system-defined.

## Take Away
Host-level firewall primary function is to

1) Not to allow any malicious data to enter your system 2) Not to allow any
critical data to leave your system without your consent.