import BackButton from "../components/BackButton";
import Image from "next/image";
import NavMenu from "../components/NavMenu";

export default function Contact() {
    return (
        <div className="min-h-screen bg-custom-bg font-sans p-8 md:p-12 lg:p-16">
            <NavMenu />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 text-primary-darker">
                Get in Touch
            </h1>
            <div className="max-w-6xl mx-auto border border-primary-light rounded-lg bg-white shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Intro + Links */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-darker">
                                Let's Connect
                            </h2>
                            <p className="text-lg text-primary-dark mb-6">
                                Feel free to reach out to me via email or
                                connect with me I'm always open to discussing
                                new projects, opportunities, or just having a
                                chat!
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 border border-primary-light rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="text-primary-base">
                                    <Image
                                        src="/media/svg/email-icon.svg"
                                        alt="Email"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-darker">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-primary-base hover:underline"
                                    >
                                        marwah20alshakhli@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-center gap-4 p-4 border border-primary-light rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="text-primary-base">
                                    <Image
                                        src="/media/svg/linkedin-icon.svg"
                                        alt="LinkedIn"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-darker">
                                        LinkedIn
                                    </p>
                                    <a
                                        href="https://www.linkedin.com/in/marwah-al-shakhli-094566360/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-base hover:underline"
                                    >
                                        Marwah Al-Shakhli
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-semibold text-primary-darker mb-2"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-semibold text-primary-darker mb-2"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-primary-darker mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-primary-darker mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-2 border border-primary-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-base text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-darker transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
