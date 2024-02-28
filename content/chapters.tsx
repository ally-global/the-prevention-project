import { ReactNode } from "react";

export type Chapter = {
  title: string;
  downloadUrl?: string;
  content: {
    title: string;
    description?: ReactNode;
    facilitationNote?: string;
    vimeoId?: string;
    vimeoDownloadUrl?: string;
    pdfUrl?: string;
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739053/339102d766",
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
    downloadUrl: "something",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739159",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739159/d492647a2e",
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
        vimeoId: "916843254",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843254/a850328f68",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908740111/aded50743c",
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
        vimeoId: "916102481",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102481/8f5ba2ac5e",
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
        pdfUrl:
          "pdfs/grades3-5/Gr3-5_Ch1_Part5_Consent-and-Healthy-Boundaries.pdf",
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
        vimeoId: "908739333",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739333/9922cffe50",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916102553",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102553/b95ee86896",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908740508",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908740508/d600e19458",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916102573",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102573/8dddca4f3f",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades3-5/Gr3-5_Ch2_Part5_The-Internet.pdf",
      },
    ],
  },
  {
    title: "Information Sharing Online",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739495",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739495/6c0fcac1dd",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916102686",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102686/fbff51c7f2",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "911654168",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/911654168/401ffeb4ce",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916102660",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102660/da220bc747",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades3-5/Gr3-5_Ch3_Part5_Information-Sharing-Online.pdf",
      },
    ],
  },
  {
    title: "Unsafe People and Unhealthy Social Accounts",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739715",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739715/7ecbf2da67",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916843489",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843489/2ad44fcd17",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908747620",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908747620/430f2d20c2",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916102754",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102754/3248cb0879",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades3-5/Gr3-5_Ch4_Part5_Unsafe-People-and-Unhealthy-Social-Accounts.pdf",
      },
    ],
  },
  {
    title: "Being a Safe Person",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739896",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739896/ba817981f4",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916843559",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843559/0c83546b7e",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908748842",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908748842/792790a5e5",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916102792",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102792/66b1db28f2",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades3-5/Gr3-5_Ch5_Part5_Being-a-Safe-Person.pdf",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908806931/25294cc752",
        description: (
          <>
            Welcome to The Prevention Project! Here, we&apos;re diving into some
            important conversations about sexual exploitation. Join us as we
            explore topics related to friendships, relationships, and everyday
            situations that intersect with this important issue. We encourage
            you to apply what you learn to your own lives and help create a
            safer world for everyone. If you ever feel uncertain or encounter
            concerning content, reach out to a trusted adult or click “Get Help
            Now” in the navigation bar for assistance. Let&apos;s make both the
            online and offline world safer together! Ready to get started?
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908753527/d535689f37",
        externalLinks: [
          { name: "Resource name", caption: "Caption", href: "" },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194566",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194566/718526d2e4",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908752727",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908752727/57cc28cc8e",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194542",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194542/6cc518fb7c",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch1_Part5_Consent-and-Healthy-Boundaries.pdf",
      },
    ],
  },
  {
    title: "Sexual Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908801853",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908801853/f5bba1a747",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194592",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194592/d63da8165a",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908802032",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908802032/e577a50f31",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194582",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194582/7392728c8c",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades6-7/Gr6-7_Ch2_Part5_Sexual-Exploitation.pdf",
      },
    ],
  },
  {
    title: "Sexting and Peer Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908802912",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908802912/414f4dfe3f",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194627",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194627/a0cfc99472",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908802480",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908802480/a7544fdc7d",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194610",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194610/0e52c2d1d1",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch3_Part5_Sexting-and-Peer-Exploitation.pdf",
      },
    ],
  },
  {
    title: "About the Internet and Information Sharing",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908804597",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908804597/808ce15b52",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194645",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194645/de443d965c",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908804813",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908804813/42a2ec5ff0",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194637",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194637/c8e90bc232",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch4_Part5_About-the-Internet-and-Information-Sharing.pdf",
      },
    ],
  },
  {
    title: "Sextortion",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908805561",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908805561/ec4539e1d4",
        description: (
          <>
            In this chapter, we&apos;re talking about a serious and growing
            problem: Sextortion. Think of it as digital blackmail. It happens
            when someone threatens to share your personal photos or information
            unless you do what they want online. Just know, you&apos;re not
            alone if you ever face this, and there are steps you can take to
            stay safe and seek help. Throughout this chapter, we&apos;ll dive
            into what sextortion means, how to spot warning signs, and, most
            importantly, how to protect yourself and find support if you ever
            come across it. <br />
            <br />
            If you are facing being pressured or blackmailed online, there are
            many resources and trusted adults that will help. You don&apos;t
            have to deal with this alone.
          </>
        ),
        facilitationNote:
          "Facilitation tip: After watching the video, facilitate a discussion building on the conversation started in the video. Ask students the same question: What would they do if a friend told them they were being pressured or blackmailed online?",
        externalLinks: [
          {
            name: "Cybertip",
            caption: "Learn more about sextortion",
            href: "https://cybertip.ca/",
          },
          {
            name: "DontGetSextorted.ca",
            caption: "Send a Naked Mole Rat instead",
            href: "https://dontgetsextorted.ca/",
          },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194676",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194676/8ba2a98760",
        description: (
          <>
            Sharing photos with people you haven&apos;t met in person is never
            safe. We can&apos;t be sure who is really on the other end. Scammers
            might pretend to be someone else in order to blackmail you using
            your images for money or more sexual content. This is a crime called
            sextortion. If this ever happens to you, remember to take
            screenshots of everything, tell a trusted adult, and know that
            it&apos;s not your fault.
            <br />
            <br />
            If you are facing being pressured or blackmailed online, there are
            many resources and trusted adults that will help. You don’t have to
            deal with this alone.
          </>
        ),
        facilitationNote:
          "Facilitation Tip: Guide students in exploring the concept of sextortion and its potential risks. Encourage them to reflect on their understanding of online interactions and the deceptive tactics scammers use. Prompt questions such as: How can scammers manipulate online interactions to exploit others? Can you identify any warning signs in the scenarios presented in the video? Use these questions to initiate a discussion and promote critical thinking about the importance of online safety.",
        externalLinks: [
          {
            name: "Cybertip.ca",
            caption: "sextortion reporting",
            href: "https://cybertip.ca/en/report/",
          },
        ],
      },
      {
        title: "Red Flag/Green Flag",
        vimeoId: "908805219",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908805219/545cb1b54b",
        description: (
          <>
            Let&apos;s play a game called Red Flag Green Flag to get better at
            spotting warning signs. We&apos;ll use red and green flags to figure
            out how to identify unsafe people online. This is important to
            practice because connecting with unsafe individuals on the internet
            can lead to risky situations like sextortion. Join Kevin, Camille,
            Kara, and Nate as they navigate the ins and outs of online
            interactions.
            <br />
            <br />
            If you are facing being pressured or blackmailed online, there are
            many resources and trusted adults that will help. You don&apos;t
            have to deal with this alone.
          </>
        ),
        facilitationNote:
          "Facilitation Tip: Use this video as an opportunity to discuss the importance of how to navigate online interactions and recognize the warning signs of unsafe people. You can pause the video after each question, to have discussion about what everyone thinks their answer would be, and discuss if you agree with what Camille, Kevin, Nate and Kara share.",
        externalLinks: [
          {
            name: "Cybertip.ca",
            caption: "sextortion reporting",
            href: "https://cybertip.ca/en/report/",
          },
        ],
      },
      {
        title: "Imagine This",
        vimeoId: "916194656",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194656/57438f9cf8",
        description: (
          <>
            In this video, Ben faces a common situation when someone he met
            online asks for intimate photos. It might seem like we know someone
            on the internet, but the truth is, we never really know who is
            behind the screen. No matter how much you trust or feel it&apos;s
            safe, never share photos online. It puts you at risk for sextortion,
            a type of digital blackmail where someone threatens you for more
            pictures or money using a sexual photo or video they got.
            <br />
            <br />
            If you are ever dealing with online blackmail and need help,
            remember you don&apos;t have to handle it alone. There are resources
            and trusted adults ready to support you.
          </>
        ),
        facilitationNote:
          "Facilitation Tip: Engage students in a reflective discussion about the potential risks of online interactions, specifically focusing on scenarios like the one shown in the video. Prompt them with questions like: How did Ben's trust in the online interaction impact his decisions? Can you identify any red flags in the conversation between Ben and the person online?",
        externalLinks: [
          {
            name: "Cybertip.ca",
            caption: "sextortion reporting",
            href: "https://cybertip.ca/en/report/",
          },
        ],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades6-7/Gr6-7_Ch5_Part5_Sextortion.pdf",
        description: (
          <>
            Print or download this infographic to recap what you&apos;ve learned
            in this chapter. Take it a step further by using our reflection
            page. What advice would you give a friend who came to you thinking
            they’re being sextorted? How would you support them? What are
            warning signs that someone might be trying to sextort you? Remember,
            no matter how much you trust or feel it&apos;s safe, never share
            photos online. We never really know who is behind the screen.
            <br />
            <br />
            If you are ever dealing with online blackmail and need help,
            remember you don&apos;t have to handle it alone. There are resources
            and trusted adults ready to support you.
            <br />
            <br />
            Well done! We&apos;re moving on to Chapter 6, to break down the
            subject of predatory individuals and grooming. Keep pushing forward!
          </>
        ),
        facilitationNote:
          "Facilitation tip: print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for practice and applying what they've learned.",
        externalLinks: [
          {
            name: "Cybertip.ca",
            caption: "sextortion reporting",
            href: "https://cybertip.ca/en/report/",
          },
        ],
      },
    ],
  },
  {
    title: "Predatory People and Grooming",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908805853",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908805853/369d607256",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194694",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194694/e8c2585820",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908806030",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908806030/c176da8432",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194681",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194681/0de43f0012",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch6_Part5_Predatory-People-and-Grooming.pdf",
      },
    ],
  },
  {
    title: "Human Trafficking",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908806456",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908806456/3de695ad28",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194710",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194710/f89a4d42c0",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908806613",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908806613/5aa8610fe8",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades6-7/Gr6-7_Ch7_Part4_Human-Trafficking.pdf",
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
        vimeoId: "916194767",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908743419",
        externalLinks: [],
      },
      {
        title: "Imagine This p1",
        vimeoId: "916194753",
        externalLinks: [],
      },
      {
        title: "Imagine This p2",
        vimeoId: "916194791",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades8-12/Gr8-12_Ch1_Part6_Consent-and-Healthy-Boundaries.pdf",
      },
    ],
  },
  {
    title: "Sexual Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908705594",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194822",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "916540823",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194837",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades8-12/Gr8-12_Ch2_Part5_Sexual-Exploitation.pdf",
      },
    ],
  },
  {
    title: "Sexting and Peer Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908705792",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916542168",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "916542036",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916542194",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades8-12/Gr8-12_Ch3_Part5_Sexting-and-Peer-Exploitation.pdf",
      },
    ],
  },
  {
    title: "Exploiters and Predators",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908705992",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194897",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908749718",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194885",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades8-12/Gr8-12_Ch4_Part5_Exploiters-and-Predators.pdf",
      },
    ],
  },
  {
    title: "Internet Dynamics and Grooming",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908706157",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194919",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908750312",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194908",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades8-12/Gr8-12_Ch5_Part5_Internet-Dynamics-and-Grooming.pdf",
      },
    ],
  },
  {
    title: "Sextortion",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908706340",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194935",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908750660",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194927",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades8-12/Gr8-12_Ch6_Part5_Sextortion.pdf",
      },
    ],
  },
  {
    title: "Pimps and Human Trafficking",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908706529",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194968",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908750942",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194948",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades8-12/Gr8-12_Ch7_Part5_Pimps-and-Human-Trafficking.pdf",
      },
    ],
  },
  {
    title: "High-Risk Behaviours",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908706690",
        externalLinks: [],
      },
      {
        title: "Say it Simple p1",
        vimeoId: "916194993",
        externalLinks: [],
      },
      {
        title: "Say it Simple p2",
        vimeoId: "916195003",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908751430",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194974",
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot 1",
        pdfUrl:
          "pdfs/grades8-12/Gr8-12_Ch8_Part6_High-Risk-Behaviours-OnlyFans.pdf",
      },
      {
        title: "Knowledge Snapshot 2",
        pdfUrl:
          "pdfs/grades8-12/Gr8-12_Ch8_Part7_High-Risk-Behaviours-Sugaring.pdf",
      },
    ],
  },
];
