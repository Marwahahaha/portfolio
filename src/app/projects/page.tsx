import BackButton from "../components/BackButton";
import NavMenu from "../components/NavMenu";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <NavMenu />
            <BackButton />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 text-primary-darker">Projects</h1>
            <p className="text-xl text-center text-primary-dark mb-8">
                Here you can find some of the projects I've worked on. I'm passionate about software development and always eager to take on new challenges. Feel free to explore my projects and reach out if you have any questions or would like to collaborate!
            </p>
        </div>
    );
}