module.exports = {
  title: "#CyberArch",
  description: "Interactive Cybersecurity Manual",

  base: "/interactive-manual/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
        integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
        crossorigin: "anonymous"
      }
    ]
  ],

  themeConfig: {
    search: false,

    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          ["/introduction/", "Getting Started"],
          ["/introduction/convention", "Conventions"],
          ["/introduction/note-to-readers", "Note to Readers"]
        ]
      },
      {
        title: "Passwords",
        collapsable: false,
        children: [
          ["/passwords/", "Introduction"],
          ["/passwords/how-passwords-work", "How Passwords Work"],
          ["/passwords/common-passwords", "Common Passwords"],
          ["/passwords/password-reuse", "Reusing Passwords"],
          ["/passwords/password-requirements", "Password Requirements"],
          ["/passwords/summary", "Summary"]
        ]
      },
      {
        title: "Phishing",
        collapsable: false,
        children: [
          ["/phishing/", "Introduction"],
          ["/phishing/fake-domains", "Fake Domains"],
          ["/phishing/fake-links", "Fake Links"],
          ["/phishing/fake-emails", "Fake Emails"],
          ["/phishing/summary", "Summary"]
        ]
      },
      {
        title: "Encryption",
        collapsable: false,
        children: [
          ["/encryption/", "Introduction"],
          ["/encryption/why-encryption-is-important", "Why Encryption is Important"],
          ["/encryption/encryption-keys", "Encryption Keys"]
        ]
      },
      // {
      //   title: "Data Backup",
      //   collapsable: false,
      //   children: [
      //     ["/backups/", "Introduction"],
      //     ["/backups/backup-methods", "How Should You Backup Your Files?"]
      //   ]
      // },
      {
        title: "Ransomware",
        collapsable: false,
        children: [
          ["/ransomware/", "Introduction"],
          //["/ransomware/how-ransomware-works", "How Ransomware Works"],
          //[ "/ransomware/payments-and-bitcoin", "Cryptocurrency and Paying Ransoms"],
          ["/ransomware/how-to-avoid-ransomware", "How To Report A Ransomware Attack"],
          //["/ransomware/how-to-respond", "How To Respond To A Ransomware Attack"]
        ]
      },
      {
        title: 'Data Breaches and Data Leaks',
        collapsable: false,
        children: [
          //['/public_private_networks/', 'Introduction'],
          ['/public_private_networks/vpn', 'Who to Contact in the Event of a Data Break or Data Leak'],
          ['/public_private_networks/public-wifi', 'When to Report a Data Breach or Data Leak'],
        ]
      },
      /*{
        title: "Software Updates",
        collapsable: false,
        children: [
          ["/software_updates/", "Introduction"],
          ["/software_updates/what-are-software-updates", "What are updates?"],
          ["/software_updates/why-to-update", "Why to update?"],
          ["/software_updates/what-happen-if-you-ignore", "What will happen if you ignore software updates?"],
          ["/software_updates/summary", "Summary"]
        ]
      },
      {
        title: "Firewalls",
        collapsable: false,
        children: [
          ["/firewalls/", "Introduction"],
          ["/firewalls/host-firewalls", "Hosts Firewalls"],
          ["/firewalls/network-firewalls", "Network Firewalls"],
          ['/firewalls/hardware-software-firewalls', 'Hardware Vs. Software Firewalls'],
          ["/firewalls/summary", "Summary"]
        ]
      }*/
    ]
  }
};
