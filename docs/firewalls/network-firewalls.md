# Network Firewall

Network firewalls are used in large cooperations and organization. Network
firewalls are usually a hardware device, installed to protect large servers
and internal private networks.

Let's consider organization XYZ is throwing the success party for its
employees. Only the employees of the organization with valid invitation is
allowed to enter the party with a partner. The dedicated bodyguard at the
entrance, checks if the guests have the valid invitation. The people not
having valid invitation are not allowed to enter the party.

Network firewall works in the same way. It acts as the body guard at the
entrance of the organization network and allows only the packets which
full-fill the defined policy.

## Hardware Firewall

Hardware firewall is the device which looks similarly like big router and its
control by network administrator of the organization. Hardware firewall
requires timely maintenance and also the expert technician to install and
maintain it.

<img :src="$withBase('/Firewall.png')">

The below example simulates the scenario of with and without firewall. You
can see if the firewall is not present, the legitimate as well as malicious
packet enters the network. But incase of firewall, the malicious packet is
not allowed to enter the network.

<Firewalls-SVG-firewall_network />

## Policies

Polices are the set of rules which governs the working of firewalls. The set
of rules are defined by network administrator of organization and its common
for all the hosts in that networks. Unlike host firewalls, where all hosts
has its own set of rules, network firewalls defines the rules for each host
in that network.

## Attributions

<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>