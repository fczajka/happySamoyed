import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { validate } from "react-email-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();

    const contextClass = {
        success: "bg-green-200",
        error: "bg-royalPink-200",
        default: "bg-babyBlue-300",
    };

    const sendEmail = (e) => {
        e.preventDefault();

        form.current.name.value = form.current.name.value.trim();
        form.current.email.value = form.current.email.value.trim();
        form.current.message.value = form.current.message.value.trim();

        if (
            !form.current.name.value &&
            !form.current.email.value &&
            !form.current.message.value
        ) {
            toast.error("Brak danych w formularzu!");
        } else if (!form.current.name.value && !form.current.message.value) {
            toast.error("Brak imienia i wiadomości!");
        } else if (!form.current.name.value && !form.current.email.value) {
            toast.error("Brak imienia i adresu mailowego!");
        } else if (!form.current.email.value && !form.current.message.value) {
            toast.error("Brak maila i wiadomości!");
        } else if (!form.current.name.value) {
            toast.error("Brak imienia!");
        } else if (!form.current.email.value) {
            toast.error("Brak adresu mailowego!");
        } else if (!form.current.message.value) {
            toast.error("Brak wiadomości!");
        } else if (validate(form.current.email.value)) {
            const sendMail = emailjs
                .sendForm(
                    "gmail",
                    "template_b60lpk8",
                    form.current,
                    "d-iXMGfxsUvFFZHe0"
                )
                .then(
                    () => {
                        e.target.reset();
                    },
                    () => {}
                );

            toast.promise(sendMail, {
                pending: "Wysyłamy wiadomość!",
                success: "Wiadomość wysłana!",
                error: "Wiadomość nie zotała wysłana!",
            });
        } else {
            toast.error("Zły mail!");
        }
    };
    return (
        <div
            id="contact"
            className="w-full flex flex-col max-w-1920 mx-auto text-babyBlue-900 lg:flex-row"
        >
            <div className="w-full bg-babyBlue-100 flex flex-col justify-center items-center p-2 xsm:p-8 sm:p-12 lg:w-1/2 lg:p-16">
                <h4 className="text-4xl pb-16 mt-10vh font-titan-one tracking-wide text-center lg:mt-0">
                    Napisz do nas!
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
                        type="submit"
                        textSize="text-sm"
                        textColor="text-royalPink-50"
                        bgColor="bg-royalPink-400"
                        borderColor="border-royalPink-600"
                        padding="p-5"
                    />
                </form>
            </div>
            <div className="w-full bg-babyBlue-200 p-4 pt-8 flex flex-col items-center leading-relaxed text-justify text-babyBlue-900 xsm:p-8 sm:p-16 lg:w-1/2 lg:p-12">
                <div className="w-full mt-8 md:p-4 md:w-4/5 lg:w-full lg:mt-16 xl:w-4/5 2xl:w-3/5">
                    <p className="mt-11">
                        W razie wszelkich wątpliwości zapraszamy do kontaktu.
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
                        508 310 184
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
                        szczesliwy.puszek@gmail.com
                    </p>
                </div>
            </div>
            <ToastContainer
                autoClose={1800}
                hideProgressBar={true}
                newestOnTop={true}
                closeButton={false}
                position="bottom-center"
                toastClassName={({ type }) =>
                    contextClass[type || "default"] +
                    " flex flex-row w-full p-2 min-h-10 mb-4 rounded-md text-babyBlue-1500 overflow-hidden cursor-pointer last:mb-10vh lg:last:mb-4"
                }
                bodyClassName={() => "flex font-radio-canada block p-3"}
            />
        </div>
    );
};

export default Contact;
