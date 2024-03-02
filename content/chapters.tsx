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
            Welcome to The Prevention Project! Together, we&apos;re going to
            dive into some super important topics that will help you navigate
            friendships and relationships—both in person and online. Get ready
            for a fun and interactive learning experience! If anything ever
            feels confusing or if you have questions, reach out to a safe adult
            in your life, or check out some of the resources at the bottom of
            this page. Let&apos;s team up and make a real difference in creating
            a safer, happier online and offline world for everyone. Are you
            ready to jump in?
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
    downloadUrl: "https://3adczzlm.paperform.co",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739159",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739159/d492647a2e",
        facilitationNote:
          "Facilitation Tip: Begin by sparking curiosity about consent and boundaries with an interactive warm-up activity. Have students draw or write down examples of situations where they've had to give consent in their daily lives on sticky notes. Then, create a consent wall where they can stick their notes and share their experiences with the group. This sets the stage for a lively discussion about the importance of consent and setting boundaries.",
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
      },
      {
        title: "Say it Simple",
        vimeoId: "916843254",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843254/a850328f68",
        facilitationNote: `Facilitation Tip: After watching the video, invite the students to create their own "boundary bracelets" using colorful beads or string. As they design their bracelets, encourage them to think about what boundaries mean to them and what makes them feel comfortable or uncomfortable. Facilitate a sharing circle where they can explain the significance of their bracelet designs and discuss how setting boundaries empowers them in their everyday lives. Emphasize the importance of enthusiastic consent and how setting boundaries protects their ability to give consent.`,
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
            Discover the power of setting boundaries – like an invisible fence
            around you - to protect your ability to consent, both in person and
            online.
          </>
        ),
      },
      {
        title: "True or False",
        vimeoId: "908740111",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908740111/aded50743c",
        facilitationNote: `Facilitation Tip: Before starting the video, distribute true/false paddles or red and green flags to each participant. Instruct them to hold up the corresponding paddle or flag to indicate whether they believe each statement presented in the video is true or false. Pause the video after each statement to discuss their answers and reasoning as a group. Encourage and teamwork as they navigate through the dos and don'ts of consent and healthy boundaries.`,
        description: (
          <>
            Ever wondered about the subtle signals and body language that convey
            consent? Join us as we navigate through everyday situations,
            answering questions about sharing, hugs, and hanging out after
            school. Discover why understanding consent goes beyond just the
            spoken word, and why enthusiastic agreement is key. Ready for some
            interactive learning? Click play and let the True or False adventure
            begin!
          </>
        ),
      },
      {
        title: "Imagine This",
        vimeoId: "916102481",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102481/8f5ba2ac5e",
        facilitationNote:
          "Facilitation Tip: Pause the video after each scenario and ask students to imagine themselves in the same situation. Prompt them to consider how they would respond and whether they would feel comfortable with the interactions shown. Encourage open discussion about the importance of clear communication and enthusiastic consent in everyday interactions.",
        description: (
          <>
            In this video, we witness everyday scenarios where kids like Priya,
            Jay, and Sam navigate giving and receiving consent. Whether
            it&apos;s borrowing a pen, playing catch, or sharing snacks,
            discover how these interactions embody the essence of enthusiastic
            yes – where both minds and bodies are in sync. As you&apos;re
            watching, feel free to pause and think about how you might react in
            these situations? How would you respond? How would you know if
            you&apos;re giving an enthusiastic yes?
          </>
        ),
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades3-5/Gr3-5_Ch1_Part5_Consent-and-Healthy-Boundaries.pdf",
        facilitationNote:
          "Facilitation Tip: Provide students with the activity page along with additional materials such as stickers, glitter pens, and colorful markers to enhance their creativity. Encourage them to personalize their activity page with drawings, collages, or written reflections about consent and healthy boundaries. As they work on their creations, facilitate discussions about the importance of setting boundaries and respecting each other's autonomy. Celebrate their unique ideas and contributions, fostering a sense of empowerment and self-expression.",
        description: (
          <>
            Now, it&apos;s your turn! Download or print this activity page to
            fill in your personal boundaries. What are the limits that make you
            feel secure? Share your thoughts on consent - the freedom to agree
            or disagree without pressure. Discover the power of your
            enthusiastic &quot;yes&quot; and explore ways to communicate when
            someone isn&apos;t respecting your boundaries.
            <br />
            <br />
            Ready for a creative challenge? Unleash your artistic side with the
            drawing prompt: &quot;Can you draw what consent means to you?&quot;
            Download or print the activity page and make it your own!
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
        facilitationNote: `Facilitation Tip: Start the chapter with an engaging icebreaker activity to get the students excited about exploring the internet. Have them create "digital passports" using colorful paper and stickers, where they write down their favorite online activities and interests. Encourage them to share their passports with the group and discuss what makes the internet so fascinating for them.`,
        description: (
          <>
            Welcome to Chapter 2: The Internet! Ever wondered what makes the
            online world so fascinating? We asked some friends what they love to
            do online, and their answers were awesome. But here&apos;s the
            thing: with 5 billion people connecting online, there&apos;s a lot
            to explore and discover. Join us as we delve into the internet,
            understanding who&apos;s out there, how people use it, and answering
            some important questions about this vast digital space.
          </>
        ),
      },
      {
        title: "Say it Simple",
        vimeoId: "916102553",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102553/b95ee86896",
        facilitationNote:
          "Facilitation Tip: After watching the video, discuss with the students the various ways they use the internet and what they find exciting about it. Guide them in understanding that while the internet is a powerful tool, it's essential to use it responsibly. Encourage them to share their experiences and brainstorm positive and healthy ways to navigate the digital space.",
        description: (
          <>
            Having access to the internet is like having the world in the palm
            of your hand. We use it for gaming, shopping, homework, chatting
            with friends, sharing photos, and watching videos. The internet can
            connect us with over 5 billion people from around the world.
            However, just because you have this powerful tool doesn&apos;t mean
            you&apos;re always ready to use it. Let&apos;s explore how to
            navigate this digital space positively and healthily.
          </>
        ),
      },
      {
        title: "True or False",
        vimeoId: "908740508",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908740508/d600e19458",
        facilitationNote: `Facilitation Tip: Pause the video at different points to discuss the scenarios presented and ask students how they would respond in similar situations. Emphasize the importance of online safety and the role of trusted adults in helping them navigate uncomfortable situations. Encourage open dialogue about setting boundaries and seeking help when needed.`,
        description: (
          <>
            Welcome to &quot;That&apos;s not okay&quot; - the game where we
            determine how to respond to content we find on the internet. Join us
            as we answer questions about online safety, sharing insights on
            gaming, and exploring the right actions to take when encountering
            uncomfortable situations. Learn why it&apos;s crucial to involve
            trusted adults in your online experiences. Ready to play? Click to
            start!
          </>
        ),
      },
      {
        title: "Imagine This",
        vimeoId: "916102573",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102573/8dddca4f3f",
        facilitationNote: `Facilitation Tip: Pause the video after watching Jaime navigate the online situation and ask students to share their thoughts on what Jaime did well and what could have been done differently. Prompt them to identify safe adults in their lives whom they can turn to for help when faced with similar challenges online. Encourage empathy and critical thinking about online interactions.`,
        description: (
          <>
            Boundaries can help us be safer and enjoy the world, even online. In
            this video, we see Jaime navigating a tricky situation online. It
            shows how important having safe adults is to help make sure that we
            enjoy what we see and who we connect with. The internet has over 5
            billion users from all around the world, and whether you&apos;re
            playing games or chatting with friends, let&apos;s figure out how to
            stay safe and still have a good time.
            <br />
            <br />
            While you&apos;re watching, take a moment and think about what you
            would do if you were in Jaime&apos;s shoes. Who are the safe adults
            in your life who you can go to for help?
          </>
        ),
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades3-5/Gr3-5_Ch2_Part5_The-Internet.pdf",
        facilitationNote: `Facilitation Tip: Provide students with the activity page along with additional materials such as stickers, glitter pens, and colorful markers to enhance their creativity and give them time to reflect on their online experiences. Encourage them to list activities that make them feel happy and safe online and to discuss the rules they have for internet use with their parents or guardians. After completing the activity, invite them to share their thoughts and drawings with the group, fostering creativity and discussion about online safety.`,
        description: (
          <>
            Now, it&apos;s your turn to reflect on your online experiences!
            Download or print this activity page to jot down all the things you
            enjoy doing online that make you feel happy and safe. What about the
            rules you and your parents have for using the internet safely? Write
            those down too. Think about your online world, jot down your
            thoughts, and keep those trusted adults in mind - they&apos;re your
            go-to when you need guidance. Download or print the activity page
            and add make it your own!
            <br />
            <br />
            Well done! You&apos;ve completed Chapter 2 on The Internet. Next up,
            let&apos;s talk about sharing information online.
          </>
        ),
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
      },
      {
        title: "Say it Simple",
        vimeoId: "916102686",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102686/fbff51c7f2",
      },
      {
        title: "True or False",
        vimeoId: "911654168",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/911654168/401ffeb4ce",
      },
      {
        title: "Imagine This",
        vimeoId: "916102660",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102660/da220bc747",
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
      },
      {
        title: "Say it Simple",
        vimeoId: "916843489",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843489/2ad44fcd17",
      },
      {
        title: "True or False",
        vimeoId: "908747620",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908747620/430f2d20c2",
      },
      {
        title: "Imagine This",
        vimeoId: "916102754",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102754/3248cb0879",
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
      },
      {
        title: "Say it Simple",
        vimeoId: "916843559",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843559/0c83546b7e",
      },
      {
        title: "True or False",
        vimeoId: "908748842",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908748842/792790a5e5",
      },
      {
        title: "Imagine This",
        vimeoId: "916102792",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102792/66b1db28f2",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908705285/e7050108fb",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908705427/04e0ec865e",
        externalLinks: [
          { name: "Resource name", caption: "Caption", href: "" },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194767",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194767/1eaafa2007",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908743419",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908743419/0fdb78ae25",
        externalLinks: [],
      },
      {
        title: "Imagine This p1",
        vimeoId: "916194753",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194753/4e24a9ee6d",
        externalLinks: [],
      },
      {
        title: "Imagine This p2",
        vimeoId: "916194791",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194791/9810efa152",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908705594/e85808f115",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194822",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194822/456afb75ea",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "916540823",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916540823/1c77f10339",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194837",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194837/98ca40184b",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908705792/26c906aadc",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916542168",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916542168/32fff9f6b1",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "916542036",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916542036/d81aa94c05",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916542194",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916542194/c7f4f50b5b",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908705992/08b0460c68",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194897",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194897/f1e23e158c",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908749718",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908749718/3fca0d7d55",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194885",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194885/6d8027c60c",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908706157/25093123b4",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194919",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194919/51e3e09633",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908750312",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908750312/3a0b22bb8a",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194908",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194908/82a2001f93",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908706340/aeeb5fd019",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194935",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194935/58f2b3802c",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908750660",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908750660/0a97b387c7",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194927",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194927/5627aaa244",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908706529/af3e350de8",
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194968",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194968/c3d52529e2",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908750942",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908750942/db82ce577c",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194948",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194948/115e7ae149",
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
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908706690/517b7aa158",
        externalLinks: [],
      },
      {
        title: "Say it Simple p1",
        vimeoId: "916194993",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194993/a90e098d03",
        externalLinks: [],
      },
      {
        title: "Say it Simple p2",
        vimeoId: "916195003",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916195003/25daeb9888",
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908751430",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908751430/ef558787e9",
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194974",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194974/cfdd30314d",
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
