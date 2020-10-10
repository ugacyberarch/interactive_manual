const moment = require("moment");

export const phish = [
  {
    read: false,
    date: moment()
      .subtract(0, "days")
      .format(),
    from: "Google Support <support@google.com.support.example.com>",
    to: "me@example.com",
    subject: "Restart Your Membership",
    iframe: "google-sign-in.html",
    lead: "Hi {{.FirstName }}, Your Google Account {{.Email}} was..."
  },
  {
    read: false,
    date: moment()
      .subtract(4, "hours")
      .format(),
    from: "Account Services <ebay@ehoy.com>",
    to: "me@example.com",
    subject: "eBay - Suspicious Activity on your Account",
    iframe: "ebay-activity.html",
    lead: "Hello, We are letting you know of recent suspicious activity..."
  },
  {
    read: false,
    date: moment()
      .subtract(11, "hours")
      .format(),
    from: "LinkedIn <no-reply@likned-in.com>",
    to: "me@example.com",
    subject: "LinkedIn - Password Reset Requested",
    iframe: "linkedin-password-reset.html",
    lead: "Hi, You recently requested a password reset."
  },
  {
    read: false,
    date: moment()
      .subtract(0, "days")
      .format(),
    from: "support@netfIix.com",
    to: "me@example.com",
    subject: "Restart Your Membership",
    content:
      "Hello, \n iTunes let us know that you asked to cancel your membership. We've cancelled your membership effective Tuesday, February 1st, 2019. \n Obviously we'd love to have you back. If you change your mind, simply restart your membership to enjoy all the best TV shows & movies without interruption."
  },
  {
    read: false,
    date: moment()
      .subtract(1, "days")
      .format(),
    from: "records@doI.gov",
    to: "me@example.com",
    subject: "Update Your Official Record",
    content:
      "This is an urgent request to update your employment record at the U.S. Department of Labor"
  },
  {
    read: false,
    date: moment()
      .subtract(8, "days")
      .format(),
    from: "irsteamsupport@irs.gov.com",
    to: "me@example.com",
    subject: "Tax Refund",
    content:
      "Dear Tax Payer,  We've notice your account information is missing or incorrect. we need to verify your account information to file your Tax Refund. Please follow this link to verify your information"
  },
  {
    read: false,
    date: moment()
      .subtract(8, "days")
      .format(),
    from: "www.paypal-customerfeedback.com",
    to: "me@example.com",
    subject: "Suspended Account",
    content:
      "Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc."
  },
  {
    read: true,
    date: moment()
      .subtract(10, "days")
      .format(),
    from: "deliverysuportnow@upsmailservices.com",
    to: "me@example.com",
    subject: "You Missed Your Delivery!",
    content:
      "Hello, This is a follow-up regarding your package delivery: Tracking Number 0p2uYq5RIho The package contained in the above-mentioned shipment was not accepted at the destination address. Please contact your local UPS office. Within 21 days the parcel will be returned to sender."
  }
];
