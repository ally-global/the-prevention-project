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
    downloadUrl: "https://thepreventionproject-gr35-ch1.paperform.co/",
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
    downloadUrl: "https://thepreventionproject-gr35-ch1.paperform.co/",
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
    downloadUrl: "https://thepreventionproject-gr35-ch1.paperform.co/",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739495",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739495/6c0fcac1dd",
        facilitationNote: `Facilitation Tip: Introduce the chapter with a discussion about what students find fascinating about the internet and their favorite online activities. Then, delve into the concerns about privacy and safety, highlighting the importance of making smart choices in the digital realm. Encourage students to share their thoughts and questions, fostering curiosity and engagement from the start. Consider incorporating interactive elements like brainstorming sessions or a mini quiz to assess their current knowledge and generate excitement for the upcoming learning journey.`,
        description:
          "Get ready for Chapter 3: Information Sharing Online! We asked our friends why sharing information online can be a bit tricky. Their responses were spot-on, highlighting concerns about privacy and safety. It's true, sharing online opens up possibilities, but it also poses risks. We'll tackle questions like: What's the problem with sharing info? What's safe to share? And how do you navigate online conversations without compromising your security? Let's explore together and make smart choices in the digital realm.",
      },
      {
        title: "Say it Simple",
        vimeoId: "916102686",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102686/fbff51c7f2",
        facilitationNote: `Facilitation Tip: After watching the video, facilitate a hands-on activity where students create their own digital home. Provide materials like paper, markers, stickers, and cardboard cutouts to design their ideal online space. As they decorate, guide discussions about what information should be kept private in their digital home and why. Encourage creativity and imagination while reinforcing the importance of setting boundaries online.`,
        description: (
          <>
            Imagine if all of your most private thoughts and feelings ended up
            in anyone else’s hands. How would it make you feel? Some things are
            meant to be private. Just like you wouldn&apos;t want to share your
            diary with a stranger, it&apos;s important not to share private
            information with people you don&apos;t know online. It is important
            to keep private information just that—private.
            <br />
            <br />
            Think of the internet as your home. Only let in friends and family
            you trust in your digital space.
          </>
        ),
      },
      {
        title: "True or False",
        vimeoId: "911654168",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/911654168/401ffeb4ce",
        description: `Ready to test your learning? Time for some 'true or false'! We're diving into the world of online conversations and figuring out the dos and don'ts together. Join us as we explore different situations, answering questions about chatting online, gaming, and using social media. Should you tell a stranger online the name of your hockey team? What about sharing your city? Ready to play? Hit that play button and let's navigate the ins and outs of sharing information online together!`,
        facilitationNote: `Facilitation Tip: Before starting the video, distribute true/false paddles or red and green flags to each participant. Instruct them to hold up the corresponding paddle or flag to indicate whether they believe each statement presented in the video is true or false. Pause the video after each statement to discuss their answers and reasoning as a group. Encourage and teamwork as they navigate through the dos and don'ts of information sharing online.`,
      },
      {
        title: "Imagine This",
        vimeoId: "916102660",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102660/da220bc747",
        facilitationNote: `Facilitation Tip: After watching the video, invite students to participate in a role-playing activity where they act out different scenarios involving online interactions. Assign roles and scenarios related to sharing personal information online and encourage them to explore various responses and outcomes. Facilitate discussions after each scenario to reflect on the importance of setting boundaries and making safe choices online. Encourage empathy and critical thinking as they navigate through the digital world together.`,
        description: `Sharing online can be like leaving your front door wide open - it might seem harmless, but it can let unwanted guests in. Just like in real life, you wouldn't tell a stranger where you live or what school you go to. In the same way, you shouldn’t tell strangers everything about you online. The more info you share, the more attention you might attract.`,
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades3-5/Gr3-5_Ch3_Part5_Information-Sharing-Online.pdf",
        facilitationNote:
          "Facilitation Tip: Provide students with the activity page along with additional materials such as stickers, glitter pens, and colorful markers to enhance their creativity. Encourage them to personalize their activity page with drawings, collages, or written reflections about information sharing online. As they work on their creations, facilitate discussions about strategies for protecting personal information and staying safe online. Celebrate their unique ideas and contributions, fostering a sense of empowerment and ownership over their digital footprint.",
        description: (
          <>
            Now, it&apos;s your turn! Download or print this activity page to
            identify what information you consider safe to share online. Think
            about the risks and benefits of sharing, and brainstorm ways you can
            protect yourself online.
            <br />
            <br />
            Ready for a creative challenge? Express your ideas on our superhero
            drawing prompt. Give them a name and show how they keep your
            information safe! Download or print the activity page and make it
            your own.
            <br />
            <br />
            Congratulations! You&apos;ve completed Chapter 3 on Information
            Sharing Online! Keep making informed choices in the digital world.
          </>
        ),
      },
    ],
  },
  {
    title: "Unsafe People and Unhealthy Social Accounts",
    downloadUrl: "https://thepreventionproject-gr35-ch1.paperform.co/",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739715",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739715/7ecbf2da67",
        facilitationNote:
          "Facilitation Tip: To kick off the chapter, start with an interactive discussion about online safety. Ask students to share their thoughts on how to distinguish safe accounts from unsafe ones online. Encourage them to brainstorm strategies and share any tips they may have learned from their own experiences. Emphasize the importance of staying cautious and vigilant in the digital world, where appearances can be deceiving.",
        description:
          "Welcome to Chapter 4 - Unsafe People and Unhealthy Accounts! How can we tell if someone online is unsafe? In the online world, things aren't always what they seem. Online appearances might deceive you. There are about 750,000 individuals out there looking to connect, pretending to be trustworthy friends. We asked friends for tips on spotting unsafe individuals online, and they shared some useful ideas. Let's explore strategies to distinguish safe accounts from unsafe ones and learn how to see through the disguise of someone who might not have good intentions.",
      },
      {
        title: "Say it Simple",
        vimeoId: "916843489",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843489/2ad44fcd17",
        facilitationNote: `Facilitation Tip: After watching the video, organize a role-playing activity where students take turns pretending to be either safe or unsafe individuals online. Provide scenarios for them to act out, such as receiving friend requests or messages from strangers. Encourage them to use the tips shared in the video to identify red flags and respond appropriately. This activity reinforces the importance of trusting their instincts and seeking help from trusted adults when encountering suspicious online behavior.`,
        description: (
          <>
            In real life, it&apos;s obvious when someone is in a costume, but on
            the internet, it&apos;s tricky. People can pretend to be anyone,
            even unsafe individuals posing as safe ones. Pay attention to the
            questions they ask and what they want you to do. If anything feels
            off or uncomfortable, tell a trusted adult. They can help you
            navigate the situation.
            <br />
            <br />
            Don&apos;t share information or create new accounts without an
            adult&apos;s permission. Online, we just never know who anyone might
            be. Stay safe. Keep it between trusted friends.
          </>
        ),
      },
      {
        title: "True or False",
        vimeoId: "908747620",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908747620/430f2d20c2",
        facilitationNote: `Facilitation Tip: Before starting the video, distribute true/false paddles or red and green flags to each participant. Instruct them to hold up the corresponding paddle or flag to indicate whether they believe each statement presented in the video is true or false. Pause the video after each statement to discuss their answers and reasoning as a group.`,
        description: `Let's apply what we've learned with a game of 'true or false.' Imagine you're gaming with someone online, and suddenly, they offer you gaming tokens. Is it a friendly gesture or a possible risk? Join us as we dive into questions about online interactions, explore tools and tips for handling uncomfortable situations, and understand the significance of spotting red flags.`,
      },
      {
        title: "Imagine This",
        vimeoId: "916102754",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102754/3248cb0879",
        facilitationNote: `Facilitation Tip: After watching the video, lead a guided visualization activity where the students imagine themselves encountering various online scenarios. Provide prompts such as receiving a friend request from someone they don't know or being asked to share personal information. Encourage them to visualize how they would respond in each situation and discuss their thoughts and feelings afterward. This activity helps reinforce the importance of applying real-world caution to their digital interactions.`,
        description: (
          <>
            Navigating online interactions can be tricky with so many different
            people. A helpful tip is to treat every online interaction as if
            it&apos;s happening in person and respond the same way. In the
            video, kids handle situations both in person and online, showing
            that a &quot;no&quot; in person should also be a &quot;no&quot;
            online. Every online interaction is real life with a real person;
            there&apos;s just a screen between you.
            <br />
            <br />
            While watching, reflect on your own online experiences. Consider how
            you&apos;ve dealt with online situations, and think about ways you
            can apply real-world caution to your future digital interactions.
          </>
        ),
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades3-5/Gr3-5_Ch4_Part5_Unsafe-People-and-Unhealthy-Social-Accounts.pdf",
        facilitationNote: `Facilitation Tip: Provide students with the activity page along with additional materials such as stickers, glitter pens, and colorful markers to enhance their creativity and guide them through reflecting on what they've learned about online safety. Encourage them to jot down their thoughts on personal boundaries and indicators of unsafe people or accounts online. After completing the activity, invite them to share their ideas and artistic creations with the group.`,
        description: (
          <>
            You’re doing great! Now, it&apos;s your turn to take charge and
            reflect on what you&apos;ve learned. Download or print this
            interactive activity page designed just for you. Share your thoughts
            on personal boundaries in the online world - what can you do if you
            encounter an unsafe person? Jot down other things that indicate that
            someone is an unsafe person or an unsafe online account.
            <br />
            <br /> Ready for a creative challenge? Picture someone you trust and
            feel safe with, like a family member, friend, or even a favorite
            online character. Sketch a picture of this person, showcasing your
            artistic skills to highlight the traits that make them a safe
            individual.
            <br />
            <br />
            Congratulations on completing Chapter 4! Keep up the great work as
            you continue your journey towards being a smart and safe digital
            explorer.
          </>
        ),
      },
    ],
  },
  {
    title: "Being a Safe Person",
    downloadUrl: "https://thepreventionproject-gr35-ch5.paperform.co/",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908739896",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908739896/ba817981f4",
        facilitationNote: `Facilitation Tip: Begin the chapter with an open discussion about what it means to be a safe person. Ask students to share their thoughts on the qualities of a good friend or a safe individual. Encourage them to brainstorm ways they can contribute to creating a positive and safe environment both online and offline. Emphasize the importance of empathy, kindness, and respect in fostering healthy relationships and communities.`,
        description: (
          <>
            Welcome to Chapter 5: Being a Safe Person! After learning about
            recognizing unsafe individuals, let&apo;s now focus on identifying
            safe people. What qualities make someone a good friend or a safe
            person? Our friends shared thoughts like being there in tough times
            and bringing happiness to each other.
            <br />
            <br />
            In this chapter, let&apos;s explore how we can embody these traits
            and be a positive force in our friendships and communities—both
            online and offline. Get ready to not only keep yourself safe but
            also make a positive impact in your social circles. Let&apos;s dive
            in and become awesome friends together!
          </>
        ),
      },
      {
        title: "Say it Simple",
        vimeoId: "916843559",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916843559/0c83546b7e",
        facilitationNote: `Facilitation Tip: After introducing the chapter, lead a group activity where the students create a "Safe Person Pledge" together. Provide materials such as colorful paper, markers, and stickers for them to write down and decorate their pledges with promises to be kind, respectful, and supportive to others. Encourage them to display their pledges in a visible place as a reminder of their commitment to being safe people in their social circles.`,
        description: `We've learned that online interactions can sometimes be risky, but it can also be a great place for connection and fun. We all play a part in creating a safe online space, and being a safe person is essential for a positive experience. This means avoiding actions that could hurt or make others uncomfortable.  Remember, behind every profile is a real person, and your virtual actions have real impacts.`,
      },
      {
        title: "True or False",
        vimeoId: "908748842",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908748842/792790a5e5",
        facilitationNote: `Facilitation Tip: Transform the "True or False" segment into an interactive discussion where students respond to thought-provoking questions about kindness and respect. Pause the video at various points to present scenarios challenging their understanding of being a safe person. Encourage them to share their thoughts and experiences related to each scenario, fostering open dialogue and critical thinking about online and offline behavior.`,
        description: `Can we stand up for ourselves without being mean when faced with negativity? Join us as we navigate scenarios challenging kindness and respect, from responding to negative comments to handling private messages. While we know to be kind and respectful in real life, it can be easy to forget when there's a screen between us. Get ready for some thought-provoking questions.`,
      },
      {
        title: "Imagine This",
        vimeoId: "916102792",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916102792/66b1db28f2",
        facilitationNote: `Facilitation Tip: After watching the video, facilitate a group reflection activity where students share their own experiences of being safe people online. Provide prompts such as instances where they've stood up for someone or spread kindness through their actions. Encourage them to brainstorm additional ways they can contribute to creating a positive online environment for everyone. This activity promotes self-awareness and empathy while reinforcing the importance of being mindful of our online interactions.`,
        description: `Join Priya in this video as she learns about the impact of her online actions. While we know to be kind in real life, it's easy to forget when there's a screen between us. Follow Priya and Christopher as they explore the consequences of online comments and why kindness online is super important. After the video, reflect on how you practice being a safe person online. Consider ways, like Priya did, to be even kinder and contribute to a safer online experience for everyone. Your actions matter in creating a positive online space.`,
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades3-5/Gr3-5_Ch5_Part5_Being-a-Safe-Person.pdf",
        facilitationNote: `Facilitation Tip: Hand out the activity page to the students along with some colorful markers, glitter pens, and stickers. Encourage them to use these fun materials to express their thoughts on being a safe person. Ask them to jot down their ideas, draw symbols representing kindness and respect, and decorate their reflections in a creative way. After they finish, invite them to share their artwork and discuss what it means to be a safe person with the group.`,
        description: (
          <>
            Congratulations! You&apos;ve completed Module 5 on being a safe
            person. Now, it&apos;s time to reflect and take action. Download or
            print this activity page to plan how you can be a safe person for
            others. Recall a time when someone acted as a safe person for you.
            How did it make you feel? Consider how you can do the same for
            others. Ready for a creative challenge? Draw a scenario of you being
            a safe person to a classmate.
            <br />
            <br />
            Great job! You&apos;ve completed The Prevention Project, where
            we&apos;ve journeyed together to learn about important topics like
            consent, internet safety, and being a safe person. Give yourselves a
            round of applause!
          </>
        ),
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
            Welcome to The Prevention Project! We&apos;re diving into some
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
        facilitationNote: `Facilitation Tip: Encourage students to reflect on their own experiences and share their thoughts and understanding on consent and healthy boundaries. Use open-ended questions like: What does consent mean to you personally? Can you recall a situation where clear communication around consent made you feel respected and comfortable? How do you establish and communicate your own boundaries?`,
        description: `In this first chapter, we're diving into the topic of Consent. Consent is giving permission and choosing what you are or are not comfortable with. But knowing how to get consent and give consent is more difficult than we think. It's not just a simple 'yes' or 'no'.  True consent is when someone says “yes” with enthusiasm, and because they want to. Feeling pressured to say “yes” is not consent. Join us as we break it all down together.`,
      },
      {
        title: "Say it Simple",
        vimeoId: "916194566",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194566/718526d2e4",
        facilitationNote: `Facilitation tip: Encourage students to pause and notice how their bodies feel when discussing consent. Ask them questions like: "How does your body tell you when you're excited or uncomfortable?”, "Can you think of a time when your gut feelings helped you make a choice?", "Why is it important to pay attention to what your body is telling you during discussions about consent?"`,
        description: (
          <>
            Consent is all about freedom, and having the freedom to choose what
            you are and aren&apos;t comfortable with. In other words, giving
            permission. Real consent is expressing an enthusiastic YES, because
            anything less than a confident &quot;yes&quot; is a &quot;no.&quot;
            <br />
            <br />
            One way to know whether we are giving consent or just going along
            with something out of pressure is by paying attention to how our
            body feels. Listen to your gut and body; if it feels happy, relaxed,
            and excited, you&apos;re giving a genuine &quot;yes.&quot; This rule
            applies to technology too—always respect and give consent.
          </>
        ),
      },
      {
        title: "True or False",
        vimeoId: "908752727",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908752727/57cc28cc8e",
        facilitationNote: `Facilitation Tip: Use this video as an opportunity to discuss the importance of being safe online and careful about what information we share and who we share it with. Equip students with true and false paddles or red and green flags to facilitate live responses while watching the video. You can pause the video after each question, to have a discussion about what everyone thinks their answer would be, and discuss the answers given in the video.`,
        description: `Join us in a game of TRUE or FALSE where we explore how to respond in challenging situations around the nuances of consent and non-verbal cues. We'll tackle scenarios that help us navigate tricky situations involving consent and non-verbal cues. From decoding mixed signals to setting personal boundaries, we'll discover that consent involves more than just saying yes or no. As we tackle these questions, we'll dive into the complexities of relationships, both online and offline.`,
      },
      {
        title: "Imagine This",
        vimeoId: "916194542",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194542/6cc518fb7c",
        facilitationNote: `Facilitation tip: After watching the video, encourage students to engage in a reflective discussion. Create an inclusive space for sharing by asking questions such as: "Can you think of a time when your instincts played a role in a decision?", "How do you interpret the FRIES acronym in the context of giving consent?", "Share with the group how you would handle a situation similar to those in the video" and “What are some different ways that someone can communicate 'no'?”.`,
        description: (
          <>
            Let&apos;s explore the world of healthy boundaries together, right
            here in the school lunchroom! We&apos;ll walk through scenarios that
            highlight the importance of embodied consent - paying attention to
            your instincts. Sara, Ben, and Alex will show us how genuine
            enthusiasm plays a crucial role in giving consent. Keep in mind,
            consent is an ongoing agreement.
            <br />
            <br />
            Don&apos;t forget FRIES:
            <br />
            Freely given; Reversible; Informed; Enthusiastic; Specific
            <br />
            <br />
            As you watch, take a moment to pause and think: How would you handle
            similar situations? What choices would you make? And how can you
            make sure your &quot;yes&quot; is genuinely enthusiastic?
          </>
        ),
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch1_Part5_Consent-and-Healthy-Boundaries.pdf",
        facilitationNote: `Facilitation tip: Print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for practice and applying what they've learned.`,
        description: (
          <>
            Let&apos;s dive a bit deeper and bring what you&apos;ve learned into
            your personal life. Download or print this infographic and
            reflection page to contemplate your own personal boundaries.
            Consider how your body signals comfort or discomfort and reflect on
            how you communicate &quot;no.&quot; Remember, consent involves
            understanding both your own limits and being attuned to others&apos;
            feelings through body language and words. Think about creating a
            safe space for others to give consent.
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
    title: "Sexual Exploitation",
    content: [
      {
        title: "What's the Big Deal?",
        vimeoId: "908801853",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908801853/f5bba1a747",
        facilitationNote: `Facilitation Tip: Given the sensitive nature of the topic, create a safe and supportive environment before discussing the chapter on Sexual Exploitation. Begin by emphasizing the importance of respect and confidentiality. Discuss with students the connection between exploitation and consent.`,
        description:
          "Welcome to Chapter 2! In this chapter, we'll learn about a serious issue called Sexual Exploitation. It involves feeling pressured into doing sexual things because you want or need something, like belonging, love, or safety. Let's explore this further together.",
        externalLinks: [
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194592",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194592/d63da8165a",
        facilitationNote: `Facilitation tip:  After watching the video, set the tone for a safe and open discussion. Start by ensuring students understand the key terms, such as exploitation and sexual exploitation, through relatable examples. Asking prompting questions like: How can we distinguish between genuine consent and situations involving exploitation? In your opinion, why is it crucial to emphasize having needs met in safe ways by safe people? How can we promote an environment where everyone feels comfortable discussing topics like exploitation and consent? Reinforce the message that everyone has the right to safe and respectful relationships.`,
        description: `Exploitation is when someone takes advantage of someone else. Sexual exploitation, specifically for individuals under 18, occurs when someone takes advantage of another person sexually. By law, if you're under 18, you can't agree to any sexual activity if you receive something in return. Saying yes to sexual things just to fulfill your needs, like love, attention, or money, isn't genuine consent. It's crucial to remember that it's okay to have needs, but it's important to have them met in safe ways by safe people—ways that don't involve sexual activity.`,
        externalLinks: [
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "True or False",
        vimeoId: "908802032",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908802032/e577a50f31",
        facilitationNote:
          "Facilitation Tip: Use this video as an opportunity to discuss the importance of meeting our needs in healthy ways. You can pause the video after each question, to have discussion about what everyone thinks their answer would be, and discuss if you agree with what Camille, Kevin, Nate and Kara share.",
        description:
          "Let's continue our conversation about our needs and how we meet them. Get ready for a game of True or False where we’ll dig into the details of meeting our everyday needs in healthy ways. What are the things we need for happiness and fulfillment each day? How can we ensure we meet those needs in healthy and safe ways? Join us as we discuss our various needs and strategies to fulfill them.",
        externalLinks: [
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Imagine This",
        vimeoId: "916194582",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194582/7392728c8c",
        facilitationNote: `Facilitation tip: After watching the video, encourage students to reflect on the concepts discussed. Use prompts such as: What stood out to you the most in the video, and why? How do you define true consent based on what we've discussed? Can you brainstorm some safe and anonymous resources that might be helpful if you or someone you know needs support? In what ways can we promote a culture of consent in our school or community?`,
        description: (
          <>
            Navigating situations where we feel pressured, both in person and
            online, is tough, especially when we&apos;re offered something we
            want or need. It might seem okay, but being pushed into a situation
            where your needs are met only through a sexual act is not consensual
            and against the law, even online. But remember it also isn&apos;t
            your fault. True consent happens when you freely agree without any
            strings attached.
            <br />
            <br />
            If you ever feel unsure or pressured into something you&apos;re not
            comfortable with, please reach out to a trusted adult or one of
            these resources. If you are someone you know needs help, click on
            the Get Help Now tab for safe and anonymous resources you can reach
            out to.
          </>
        ),
        externalLinks: [
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades6-7/Gr6-7_Ch2_Part5_Sexual-Exploitation.pdf",
        facilitationNote: `Facilitation tip: print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for practice and applying what they've learned.`,
        description: (
          <>
            Now it&apos;s your turn. Take some time to reflect on your own
            needs. What do you need in your life to be happy and fulfilled?
            Download or print this infographic and reflection page to brainstorm
            ways you can meet your needs in healthy ways. Remember, we all have
            needs. But engaging in sexual activity to meet them is never okay
            and is not consensual.
            <br />
            <br />
            Great work! You finished Chapter 2 on Sexual Exploitation. Next up,
            we&apos;re talking about sexting and how we treat one another.
          </>
        ),
        externalLinks: [
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
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
        facilitationNote: `Facilitation tip: Encourage open discussion with students using questions such as: How did the information about sexting resonate with you? Can you identify potential complications when sharing intimate images, as highlighted in the video? What are your thoughts on the legal aspects of sexting, especially considering age restrictions?`,
        description: (
          <>
            In this chapter we are going to be discussing a topic people
            don&apos;t typically talk about: Sexting. But what exactly is
            sexting? Sexting is when people exchange sexual messages, pictures,
            or videos using phones, tablets, or anything else online. This is
            important to know because sharing intimate images can get
            complicated and it is against the law if you&apos;re under a certain
            age. If someone does it because they feel pressured or in exchange
            for love or acceptance, it&apos;s called sexual exploitation.
            Let&apos;s navigate this subject together.
            <br />
            <br />
            If you ever need help because of sexting, there are many resources
            and trusted adults that will help. You are not alone.
          </>
        ),
        externalLinks: [
          {
            name: "NeedHelpNow.ca",
            caption: "Support for what to do",
            href: "http://NeedHelpNow.ca",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194627",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194627/a0cfc99472",
        facilitationNote: `Facilitation tip:  Encourage open discussion with students using questions such as: Can you think of real-life situations where respecting digital boundaries is crucial? Reflect on the analogy of digital actions as a superhero code - how can we be superheroes championing respect in our online interactions?`,
        description: (
          <>
            Just like we learned in Chapter 1, consent is our way of showing
            respect for each other&apos;s boundaries, both in person and online.
            We like to think of consent as our superhero shield, our superpower.
            But, here&apos;s the reality check: sharing or pressuring others
            without permission transforms our shield into a weapon. It breaks
            not only the superhero code but also the law. Our digital actions
            carry weight. Let&apos;s use our digital superpower wisely and be
            the superheroes championing respect.
            <br />
            If you ever need help because of sexting, there are many resources
            and trusted adults that will help. You are not alone.
          </>
        ),
        externalLinks: [
          {
            name: "NeedHelpNow.ca",
            caption: "Support for what to do",
            href: "http://NeedHelpNow.ca",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "True or False",
        vimeoId: "908802480",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908802480/a7544fdc7d",
        facilitationNote: `Facilitation Tip: Use this video as an opportunity to discuss the issue of sexting and how the students are treating one another. You can pause the video after each question, to have discussion about what everyone thinks their answer would be, and discuss if you agree with what Camille, Kevin, Nate and Kara share.`,
        description: (
          <>
            Let&apos;s apply what we&apos;ve learned through a game of True or
            False, focusing on sexting and how we treat each other. Is it okay
            to ask for a nude photo? What should you do if you get one? We
            collected thoughts from friends, and their answers offer insights,
            though opinions may vary. Remember, even seemingly small actions,
            like sharing an intimate photo with someone you trust, can have
            important consequences.
            <br />
            <br />
            If you ever need help because of sexting, there are many resources
            and trusted adults that will help. You don&apos;t have to deal with
            this alone.
          </>
        ),
        externalLinks: [
          {
            name: "NeedHelpNow.ca",
            caption: "Support for what to do",
            href: "http://NeedHelpNow.ca",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Imagine This",
        vimeoId: "916194610",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194610/0e52c2d1d1",
        facilitationNote: `Facilitation Tip: Encourage students to engage in a reflective discussion after watching the video, focusing on the concepts of consent and the legal implications of sexting. Provide them with scenarios to discuss how they would respond if they ever felt pressured to engage in sexting or if they became aware of someone sharing intimate images without consent. Emphasize the importance of setting boundaries and seeking support from trusted adults or resources if needed.`,
        description: (
          <>
            In this video, we&apos;ll explore a common scenario about sexting.
            Focus on two key factors in this video: consent and the law. Genuine
            consent means a clear and enthusiastic YES; if you ever feel uneasy
            or pressured, it&apos;s not true consent. Don&apos;t hesitate to set
            boundaries - a simple &quot;no&quot; is enough. Remember, it&apos;s
            against the law for anyone under 18 to send a nude, and those under
            12 cannot consent to any sexual activity. Sending a nude is
            considered a sexual act.
            <br />
            <br />
            If you ever feel pressured to send nudes or you&apos;re concerned
            about someone sharing an intimate image of you online, reach out to
            a trusted adult or one of these resources. You are not alone.
          </>
        ),
        externalLinks: [
          {
            name: "NeedHelpNow.ca",
            caption: "Support for what to do",
            href: "http://NeedHelpNow.ca",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch3_Part5_Sexting-and-Peer-Exploitation.pdf",
        facilitationNote: `Facilitation tip: print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for practice and applying what they've learned.`,
        description: (
          <>
            It&apos;s time for you to reflect and apply what you&apos;ve learned
            to your own life. We&apos;re here to support you, so you don&apos;t
            have to face these challenges alone. Download or print this
            infographic and reflection page to create a plan for protecting your
            digital privacy. Consider ways to set boundaries for making safe
            choices when feeling pressured. Think about a trusted adult in your
            life who you could talk to about something like this.
            <br />
            <br />
            Remember, if you ever need help because of sexting, there are many
            resources and trusted adults who can help.
            <br />
            <br />
            You&apos;re doing great! We&apos;re moving on to Chapter 4, where
            we&apos;ll dive deeper into the internet and information sharing.
            Keep going!
          </>
        ),
        externalLinks: [
          {
            name: "NeedHelpNow.ca",
            caption: "Support for what to do",
            href: "http://NeedHelpNow.ca",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
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
        facilitationNote: `Facilitation Tip: After introducing the chapter, engage students in a discussion about their online habits and experiences. Use open-ended questions to prompt reflection, such as: "What kind of information do you typically share online?" and "Have you ever considered who might have access to the information you share?". Encourage students to think critically about the potential risks and consequences of sharing personal information online and emphasize the importance of setting boundaries and being cautious about what they share.`,
        description: `This chapter is all about the internet and how we share information!  When we're online, it's crucial to stick to the same boundaries and rules we follow in public and in person. Just like Camille shares in the video, we can't predict who might come across our online information and how they might use it. In this chapter, we'll explore what information is safe and unsafe to share, why it should matter to you, and how it connects to preventing sexual exploitation.`,
        externalLinks: [],
      },
      {
        title: "Say it Simple",
        vimeoId: "916194645",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194645/de443d965c",
        facilitationNote: `Facilitation Tip: Have students reflect on their online presence by checking their profiles and thinking about their online activities. Discuss the messages their online portrait may send to unfriendly accounts and encourage a conversation about what information should be kept private.`,
        description: `Being online can feel like it's not real life, but it's actually just a different form of reality—except with more people and information that stays forever. Think of the digital world like a portal; unsafe individuals might use it to access your details and potentially manipulate you into risky situations. Everything you do online creates a lasting record, shaping your online portrait. Consider what message your online presence sends to less-friendly accounts. Remember, the only thing you can control online is how much and what you choose to share!`,
        externalLinks: [],
      },
      {
        title: "True or False",
        vimeoId: "908804813",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908804813/42a2ec5ff0",
        facilitationNote: `Facilitation Tip: Use this video as an opportunity to discuss the importance of being safe online and careful about what information we share and who we share it with. You can pause the video after each question, to have discussion about what everyone thinks their answer would be, and discuss if you agree with what Camille, Kevin, Nate and Kara share.`,
        description: `Are you ready for a game of True or False? This round is about staying safe online, especially with who we choose to trust and what information we decide to share. Together we will navigate some common but complex situations many of us run into online. Like what kind of questions are okay to answer, and which ones are red flags? When should you block someone?`,
        externalLinks: [],
      },
      {
        title: "Imagine This",
        vimeoId: "916194637",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194637/c8e90bc232",
        facilitationNote: `Facilitation Tip: Engage students in a discussion about information sharing using the scenario in the video. Prompt reflection by asking questions like: What does this teach us about sharing information online? Encourage students to consider the messages Noah's online portrait communicates, and how friends and potential risks interpret and respond to online information.`,
        description: `Join Sarah and Anna as they navigate online information sharing. While the video's situation may seem harmless, aside from Sarah scaring off a crush, the underlying truth is that any information we post online is accessible to anyone. This not only includes people like Sarah's friend Anna, but it also includes unsafe individuals online who have bad intentions. Whether in person or online, it's crucial to keep your personal information private.`,
        externalLinks: [],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch4_Part5_About-the-Internet-and-Information-Sharing.pdf",
        facilitationNote: `Facilitation Tip: Print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for practice and applying what they've learned.`,
        description: (
          <>
            So what is safe vs unsafe information sharing online? Download or
            print this infographic and reflection page to practice what
            you&apos;ve learned about sharing photos and information online.
            What is and isn&apos;t ok to share with followers online? Remember,
            when we&apos;re online, it&apos;s crucial to stick to the same
            boundaries and rules we follow in public and in person.
            <br />
            <br />
            Great job! Let&apos;s transition to Chapter 5, where we&apos;ll
            explore and discuss the topic of sextortion.
          </>
        ),
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
        facilitationNote: `Facilitation Tip:  After watching the video, facilitate a discussion building on the conversation started in the video. Encourage them to share their initial thoughts and reactions. Ask probing questions such as: what signs did they associate with predators, based on what the kids mentioned? Now, think about the term "grooming" - when someone tries to build trust before causing harm. How can we tell if someone is genuinely trustworthy or if they have the wrong intentions?`,
        description: `Chapter 6 is all about predatory people and grooming. But understanding if someone is a sexual predator can be difficult. We often associate predators with scary actions and appearances, but that's not always the case. It's their actions that define them as predators. When we talk about online predators, we mean individuals engaging in harmful actions and behaviors. Predatory behavior involves building trust with the other person before turning harmful - a process known as 'grooming.' So, how can you distinguish between someone trustworthy and someone trying to build trust for the wrong reasons? Let's explore this together.`,
      },
      {
        title: "Say it Simple",
        vimeoId: "916194694",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194694/e8c2585820",
        facilitationNote: `Facilitation Tip: Pause at the 41 second mark to discuss the 6 red flags to identify predatory behaviour. Ask students to share why each of these red flags on the screen are signs of predatory behaviour. What can we do if we notice these red flags in our online interactions?`,
        description: (
          <>
            Being a predator isn&apos;t about age, gender, or appearance;
            it&apos;s about actions. They try to take advantage of others
            sexually, starting with flattery or false promises. It can be tricky
            to identify predatory behavior and unsafe individuals, so watch out
            for these red flags:
            <br />
            <br />
            Asking you to keep secrets, offering you gifts, saying mean things
            about your family, making the conversation sexual, asking you to
            transfer to a different platform, not respecting your boundaries and
            consent!
            <br />
            <br />
            If someone you know starts to show even one of these signs, make
            sure you tell an adult you trust.
          </>
        ),
      },
      {
        title: "Red Flag/Green Flag",
        vimeoId: "908806030",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908806030/c176da8432",
        facilitationNote: `Facilitation Tip:  You can pause the video after each question, to have discussion about what everyone thinks their answer would be, and discuss if you agree with what Camille, Kevin, Nate and Kara share.`,
        description: `Join Kevin, Camille, Kara, and Nate in a game of Red Flag/Green Flag to sharpen your skills at recognizing warning signs. Today's focus is on understanding the red flags when communicating with people online to help identify predatory behavior. A useful tip is to ask yourself: If this were happening in real life, would it be okay? Let's navigate through different scenarios and discuss whether they would be acceptable in real-life situations.`,
      },
      {
        title: "Imagine This",
        vimeoId: "916194681",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194681/0de43f0012",
        facilitationNote: `Facilitation Tip: After watching the video, rewind and pause at 1:14 to dive deeper into the 'SUSS' acronym with the students. Prompt them to pinpoint the specific red flags in the SUSS acronym that occurred in the video animation featuring Alex. Encourage students to brainstorm additional examples of red flags for each category letter of the acronym: Stuff, Unusual Age, Sexual, and Switch.`,
        description: `Interacting with people online can be challenging because it's hard to determine if someone is unsafe. A helpful question to ask ourselves is whether this would be okay if it were happening in real life. This becomes evident in the two nearly identical conversations Alex has, one online and one in person. It was much easier to identify red flags in person than online. Remember, whether in person or online, the signs of someone acting SUSS remain the same: Stuff; Unusual age; Sexual; Switch.`,
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl:
          "pdfs/grades6-7/Gr6-7_Ch6_Part5_Predatory-People-and-Grooming.pdf",
        facilitationNote: `Facilitation tip: Print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for practice and applying what they've learned.`,
        description: (
          <>
            Now, take a moment to reflect on your needs, especially those you
            seek online, like self-esteem, belonging, popularity, fame, and
            love. Be aware that unsafe people will try to meet those needs as a
            lure into sexual exploitation. Download or print this infographic
            and reflection page to list the needs you are trying to meet online
            brainstorm ways you can meet those needs in healthy vs unhealthy
            ways. Ensure you meet your needs positively and safely while
            navigating the online space.
            <br />
            <br />
            The final chapter is up next, and it&apos;s all about Human
            Trafficking.
          </>
        ),
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
        description: `Welcome to our final chapter! Today, we're discussing human trafficking. If this term is new to you, it means someone using another person to make money, either through unpaid work or selling their body. It's closely related to sexual exploitation. Let's dive into what human trafficking looks like and talk about how we can prevent it from happening to us or our friends.`,
        facilitationNote: `Facilitation tip: Pause the video at 0:38, and ask students to answer the question on the screen before hearing the explanation later on in the video. Following the video, engage students in a discussion to gather their reactions and thoughts about the content and the explanation provided.`,
      },
      {
        title: "Say it Simple",
        vimeoId: "916194710",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/916194710/f89a4d42c0",
        facilitationNote: `Facilitation Tip: After watching the video, engage students in a discussion about the concept of human trafficking using age-appropriate language. Encourage them to share their thoughts and questions about what they've learned. Emphasize the importance of speaking up if they suspect human trafficking is happening to themselves or someone they know. Provide information about relevant helplines and support services, reminding students that help is available.`,
        description: (
          <>
            This is what we refer to as human trafficking - when individuals are
            manipulated into working without pay or engaging in sexual
            activities in exchange for money. It&apos;s a crime! If a friend, a
            romantic partner, a family member or an online account pressures you
            into doing something sexual, that&apos;s predatory. If they make
            money from it, it transforms into human trafficking, and that person
            would be called a human trafficker.
            <br />
            <br />
            Anyone can be trafficked, and anyone can be a trafficker. If you
            feel like this might be happening to you or someone you know, speak
            up and tell someone safe that you trust!
          </>
        ),
        externalLinks: [
          {
            name: "Canadian Human Trafficking Hotline",
            caption: "Call 1-833-900-1010",
            href: "https://www.canadianhumantraffickinghotline.ca/",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "What Would You Do?",
        vimeoId: "908806613",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/908806613/5aa8610fe8",
        facilitationNote: `Facilitation Tip: Use this section as an opportunity for students to consider their responses to different scenarios related to human trafficking. Encourage them to think critically about how they would recognize red flags and support friends who might be in vulnerable situations. Discuss the importance of seeking help from trusted adults or using available resources if they encounter or suspect human trafficking.`,
        description: (
          <>
            Get ready for something different! We&apos;re switching things up
            and inviting you to consider how you would respond to various
            situations. Join Kara, Nate, Camille, and Kevin in discussing
            challenging scenarios, identifying red flags, and exploring ways to
            support our friends.
            <br />
            <br />
            Remember, if you or someone you know needs help, there are anonymous
            and safe resources available.
          </>
        ),
        externalLinks: [
          {
            name: "Canadian Human Trafficking Hotline",
            caption: "Call 1-833-900-1010",
            href: "https://www.canadianhumantraffickinghotline.ca/",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
      },
      {
        title: "Knowledge Snapshot",
        pdfUrl: "pdfs/grades6-7/Gr6-7_Ch7_Part4_Human-Trafficking.pdf",
        facilitationNote: `Facilitation Tip: Print out the page to keep in the classroom or at home as a summary of the key learnings from this chapter. Encourage students to use the reflection page as a tool for reflection and planning. Discuss together the discussion prompt on ways they can help raise awareness
        about this issue and prevent it in their community.`,
        description: (
          <>
            Print or download this infographic to recap what you&apos;ve learned
            in this chapter. Take it a step further by using our reflection
            page. How can being informed about human trafficking help you and
            your friends stay safe? Take it a step further: Think of ways you
            can help raise awareness about this issue and prevent it in your
            community!
            <br />
            <br />
            If you or someone you know needs help, these anonymous resources are
            there for you. You don&apos;t have to deal with this alone.
            It&apos;s never too late to reach out and report.
            <br />
            <br />
            Congratulations! You&apos;ve completed The Prevention Project, where
            we&apos;ve delved into important topics like consent, online safety,
            and the dangers of exploitation. Give yourselves a well-deserved pat
            on the back!
          </>
        ),
        externalLinks: [
          {
            name: "Canadian Human Trafficking Hotline",
            caption: "Call 1-833-900-1010",
            href: "https://www.canadianhumantraffickinghotline.ca/",
          },
          {
            name: "Kids Help Phone (24/7)",
            caption: `Text 'CONNECT' to 686868 OR CALL 1-800-668-6868`,
            href: "https://kidshelpphone.ca/urgent-help",
          },
        ],
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
        description: (
          <>
            Welcome to The Prevention Project, where we&apos;re diving into
            important conversations around sexual exploitation. Below,
            you&apos;ll find animations, live-action videos with peers your age,
            and more content to help you explore the nuances of topics like
            consent, sexting, online grooming, and more. As you jump in, prepare
            to challenge your perceptions and think about how some of this stuff
            may apply in your own life. Remember, if you ever feel unsure or
            encounter concerning content, reach out to a trusted adult or click
            “Get Help Now” in the navigation bar to access some helpful
            resources.
            <br />
            <br />
            Together, let&apos;s make a difference in creating a safe online and
            offline world for everyone! Click on a chapter below to begin!
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
        vimeoId: "918118157",
        vimeoDownloadUrl:
          "https://vimeo.com/user112092565/download/918118157/25459ae3ea",
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
