import Button from "./Button";

const Contact = () => {
    return (
        <div className="w-full flex text-babyBlue-900">
            <div className="w-1/2 bg-babyBlue-100 flex flex-col justify-center items-center p-16">
                <h4 className="text-4xl pb-16 pt-4 font-titan-one tracking-wide ">
                    Napisz do mnie!
                </h4>
                <form
                    className="flex flex-col w-3/5"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label
                        htmlFor="name"
                        className="mb-1 font-bold tracking-wider"
                    >
                        Imię:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="rounded-md border-0"
                    />
                    <label
                        htmlFor="e-mail"
                        className=" mt-6 mb-1 font-bold tracking-wider"
                    >
                        E-mail:
                    </label>
                    <input
                        type="text"
                        id="e-mail"
                        className="rounded-md border-0"
                    />
                    <label
                        htmlFor="message"
                        className="mt-6 mb-1 font-bold tracking-wider"
                    >
                        Wiadomość:
                    </label>
                    <textarea
                        className="resize-none rounded-md border-0"
                        id="name"
                        rows="3"
                        cols="30"
                        wrap="soft"
                    />
                    <Button
                        text="Wyślij wiadomość!"
                        textSize="text-sm"
                        textColor="text-royalPink-50"
                        bgColor="bg-royalPink-400"
                        borderColor="border-royalPink-600"
                        padding="p-5"
                    />
                </form>
            </div>
            <div className="w-1/2 bg-babyBlue-200 p-24 flex flex-col items-center leading-relaxed text-justify text-babyBlue-900">
                <div className="w-3/5 mt-24">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p className="mt-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Koninko, Wielkopolska
                    </p>
                    <p className="mt-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        123 456 789
                    </p>
                    <p className="mt-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 inline-block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        example@mail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
