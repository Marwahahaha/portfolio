import BackButton from "../components/BackButton";

export default function About() {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black p-8">
            <BackButton />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 dark:text-zinc-50">
                About Me
            </h1>
            <div className="prose dark:prose-invert max-w-3xl">
                <p>
                    Hi! My name is Marwah and I'm a software engineering student
                    at HOWEST in Bruges. <br />
                    I'm 25 years old and I'm passionate about many things. My
                    interests range from programming to sewing and fashion and
                    everything in-between.<br />
                    I love learning new things and being able to do something on
                    my own with my own skills. I also love to share my knowledge
                    with others and help them learn new things as well. <br />
                </p>
                <p>
                    As a software engineering student, I have a strong
                    foundation in problem solving, programming and software
                    development as well as system design and architecture.{" "}
                    <br />
                    I have experience with a variety of programming languages
                    and frameworks, including Java, CSharp, JavaScript, React
                    and Laravel. <br />
                    I'm always looking for new opportunities to learn and grow
                    as a developer, and I'm excited to see where my career will
                    take me in the future. <br />
                </p>
                <p>
                    I have tons of hobbies and interests, so there are no dull
                    moments in my life. I love gaming! It goes from JRPGs, to
                    strategy games, to simulation games and everything in
                    between. As long as it's not esports or fps, I'm in! <br />
                    I also love to sew and create my own clothes. I find it very
                    rewarding to be able to create something with my own hands
                    and wear it afterwards. <br />
                    Aside from daily wear, I create costumes for cosplay as
                    well. I love to go to conventions and meet other people who
                    share the same interests as me. <br />
                    I'm currently learning how to crochet and do embroidery as
                    well, and I'm loving it! <br />
                    Last but not least, I spend my commuting time doing
                    Kumihimo, which I find very relaxing and a great way to
                    unwind after a long day. <br />
                </p>
                <p>
                    If youd like to know more about me, feel free to reach out! I'm always happy to chat and connect with new people. <br />
                </p>
            </div>
        </div>
    );
}
