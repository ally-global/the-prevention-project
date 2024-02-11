import { ReactNode } from "react";

export type Chapter = {
  title: string;
  description?: string;
  content: {
    title: string;
    description?: ReactNode;
    vimeoId: string;
    externalLinks?: { name: string; caption?: string; href: string }[];
  }[];
};

export const chapters3to5: Chapter[] = [
  {
    title: "Introduction",
    content: [
      {
        title: "Grades 3-5",
        vimeoId: "908739053",
        description: (
          <>
            Hey there! Welcome to The Prevention Project, where we&apos;re about
            to embark on an exciting journey together. In this special space
            designed just for you, we&apos;re going to dive into some super
            important topics that will help you navigate friendships and
            relationships - both in person and online. Get ready for a fun and
            interactive learning experience!
            <br />
            <br />
            If anything ever feels confusing or if you have questions, reach out
            to a safe adult in your life, or check out some of the resources at
            the bottom of this page. Let&apos;s team up and make a real
            difference in creating a safer, happier online and offline world for
            everyone. Are you ready to jump in?
            <br />
            <br />
            Click a chapter below to get started!
          </>
        ),
      },
    ],
  },
  {
    title: "Consent and Healthy Boundaries",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739159",
        description: (
          <>
            In this first chapter, we&apos;re diving into a topic called Consent
            and Healthy Boundaries. Consent is about every person having the
            right to choose what they are and are not comfortable with.
            It&apos;s giving permission and agreeing to something because it
            feels good and safe. We&apos;re going to explore how we give consent
            in our everyday lives and why it&apos;s important.
          </>
        ),
        externalLinks: [
          { name: "Resource name", caption: "Caption", href: "" },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        description: (
          <>
            Consent means giving permission with an enthusiastic YES! It&apos;s
            all about having the freedom to choose what feels right and
            comfortable for you, something we do every single day.
            <br />
            <br />
            Whether it&apos;s deciding who to play with or asking for a hug, we
            navigate a world of consent in lots of ways. But here&apos;s the
            deal: true consent is given with enthusiasm, not just to be polite.
            Discover the power of setting boundaries - like an invisible fence
            around you - to protect your ability to consent, both in person and
            online.
          </>
        ),
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908740111",
        description: (
          <>
            Ever wondered about the subtle signals and body language that convey
            consent? Join us as we navigate through everyday situations,
            answering questions about sharing, hugs, and hanging out after
            school. Discover why understanding consent goes beyond just the
            spoken word, and why enthusiastic agreement is key. Ready for some
            interactive learning? Click play and let the True and False
            adventure begin!
          </>
        ),
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        description: (
          <>
            In this video, we witness everyday scenarios where kids like Priya,
            Jay, and Sam navigate giving and receiving consent. Whether
            it&apos;s borrowing a pen, playing catch, or sharing snacks,
            discover how these interactions embody the essence of enthusiastic
            yes — where both minds and bodies are in sync.
            <br />
            <br />
            As you&apos;re watching, feel free to pause and think about how you
            might react in these situations? How would you respond? How would
            you know if you&apos;re giving an enthusiastic yes?
          </>
        ),
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
        description: (
          <>
            Now, it&apos;s your turn! Download or print this activity page to
            fill in your personal boundaries. What are the limits that make you
            feel secure? Share your thoughts on consent — the freedom to agree
            or disagree without pressure. Discover the power of your
            enthusiastic &quot;yes&quot; and explore ways to communicate when
            someone isn&apos;t respecting your boundaries.
            <br />
            <br />
            Ready for a creative challenge? Unleash your artistic side with the
            drawing prompt: &quot;Can you draw what consent means to you?&quot;
            Click the link to download or print the activity page and make it
            your own.
            <br />
            <br />
            Congratulations! You finished the first Chapter on Consent & Healthy
            Boundaries! Keep going!
          </>
        ),
      },
    ],
  },
  {
    title: "The Internet",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Information Sharing Online",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Unsafe People and Unhealthy Social Accounts",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Being a Safe Person",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
];

export const chapters6to7: Chapter[] = [
  {
    title: "Introduction",
    content: [
      {
        title: "Grades 6-7",
        vimeoId: "908806931",
        description: (
          <>
            Hello and welcome to The Prevention Project—an exciting journey
            designed just for you! Here, we&apos;ll explore important topics
            that touch on friendships and relationships, both in-person and
            online. Our goal is to challenge your thinking about everyday
            situations connected to sexual exploitation and encourage you to
            apply what you learn in your personal life. We&apos;re here to talk
            about things that might be a bit awkward but don&apos;t worry,
            we&apos;ll keep it fun and light. Let&apos;s dive in!
            <br />
            <br />
            If you ever feel uncertain or encounter something that doesn&apos;t
            seem right, reach out to a trusted adult or explore the resources on
            our website. Together, we can contribute to creating a safer online
            and offline world for everyone. Ready to get started?
            <br />
            <br />
            Click on a chapter below to begin!
          </>
        ),
      },
    ],
  },
  {
    title: "Consent and Healthy Boundaries",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908753527",
        externalLinks: [
          { name: "Resource name", caption: "Caption", href: "" },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908752727",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Sexual Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Sexting and Peer Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "About the Internet and Information Sharing",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Sextortion",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Predatory People and Grooming",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Human Trafficking",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
];

export const chapters8to12: Chapter[] = [
  {
    title: "Introduction",
    content: [
      {
        title: "Grades 8-12",
        vimeoId: "908705285",
        description: <>Welcome!</>,
      },
    ],
  },
  {
    title: "Consent and Healthy Boundaries",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908705427",
        externalLinks: [
          { name: "Resource name", caption: "Caption", href: "" },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908743419",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Sexual Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Sexting and Peer Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Exploiters and Predators",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Internet Dynamics and Grooming",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Sextortion",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "Pimps and Trafficking",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
  {
    title: "High Risk Behaviours",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        vimeoId: "",
      },
    ],
  },
];
