import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { validate } from "react-email-validator";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        form.current.name.value = form.current.name.value.trim();
        form.current.email.value = form.current.email.value.trim();
        form.current.message.value = form.current.message.value.trim();

        if (validate(form.current.email.value)) {
            emailjs
                .sendForm(
                    "gmail",
                    "template_7y5yjvg",
                    form.current,
                    "d-iXMGfxsUvFFZHe0"
                )
                .then(
                    (result) => {
                        // ToDo: Add confirmation
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        } else {
            console.log("Zły mail!");
        }
        e.target.reset();
    };
    return (
        <div
            id="contact"
            className="w-full flex flex-col max-w-1920 mx-auto text-babyBlue-900 lg:flex-row"
        >
            <div className="w-full bg-babyBlue-100 flex flex-col justify-center items-center p-2 xsm:p-8 sm:p-12 lg:w-1/2 lg:p-16">
                <h4 className="text-4xl pb-16 pt-4 font-titan-one tracking-wide text-center">
                    Napisz do mnie!
                </h4>
                <form
                    ref={form}
                    className="flex flex-col w-8/12 md:w-1/2 lg:w-3/5"
                    onSubmit={sendEmail}
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
                        name="name"
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
                        id="email"
                        name="email"
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
                        id="message"
                        name="message"
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
            <div className="w-full bg-babyBlue-200 p-4 pt-8 flex flex-col items-center leading-relaxed text-justify text-babyBlue-900 xsm:p-8 sm:p-16 lg:w-1/2 lg:p-12">
                <div className="w-full mt-8 md:p-4 md:w-4/5 lg:w-full lg:mt-32 xl:w-4/5 2xl:w-3/5">
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
                    <p className="mt-6 mb-20">
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
