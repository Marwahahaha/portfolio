import BackButton from "../components/BackButton";

export default function About() {
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <BackButton />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-zinc-50">
                About Me
            </h1>
            <div className="max-w-4xl mx-auto border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 shadow-sm p-6 md:p-8">
                <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
                    <p>
                        Hi! My name is Marwah and I'm a software engineering
                        student at HOWEST in Bruges. I'm 25 years old and I'm
                        passionate about many things. My interests range from
                        programming to sewing and fashion and everything
                        in-between. I love learning new things and being able to
                        do something on my own with my own skills. I also love
                        to share my knowledge with others and help them learn
                        new things as well.
                    </p>
                    <p>
                        As a software engineering student, I have a strong
                        foundation in problem solving, programming and software
                        development as well as system design and architecture. I
                        have experience with a variety of programming languages
                        and frameworks, including Java, CSharp, JavaScript,
                        React and Laravel. I'm always looking for new
                        opportunities to learn and grow as a developer, and I'm
                        excited to see where my career will take me in the
                        future.
                    </p>
                    <p>
                        I have tons of hobbies and interests, so there are no
                        dull moments in my life. I love gaming! It goes from
                        JRPGs, to strategy games, to simulation games and
                        everything in between. As long as it's not esports or
                        fps, I'm in! I also love to sew and create my own
                        clothes. I find it very rewarding to be able to create
                        something with my own hands and wear it afterwards.
                        Aside from daily wear, I create costumes for cosplay as
                        well. I love to go to conventions and meet other people
                        who share the same interests as me. I'm currently
                        learning how to crochet and do embroidery as well, and
                        I'm loving it! Last but not least, I spend my commuting
                        time doing Kumihimo, which I find very relaxing and a
                        great way to unwind after a long day.
                    </p>
                    <p>
                        If you'd like to know more about me, feel free to reach
                        out! I'm always happy to chat and connect with new
                        people.
                    </p>
                </div>
            </div>
        </div>
    );
}
