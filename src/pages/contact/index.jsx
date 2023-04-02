import React from "react";
//Hooks
import { useForm } from "react-hook-form";
//Style
import styled from "styled-components";

export default function Contact() {
    const { register, handleSubmit } = useForm();

    const fullName = register("fullName", { required: true, minLength: 3 });
    const subject = register("subject", { required: true, minLength: 3 });
    const email = register("email", { required: true });
    const textField = register("textField", { required: true, minLength: 3 });

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <main>
            <ContactWrapper className="contact-banner">
                <h1>Contact Us</h1>
                <StyledForm onSubmit={onSubmit}>
                    <StyledLabel htmlFor="fullName">
                        <span>Full Name:</span>
                        <StyledInput
                            type="text"
                            id="fullName"
                            onChange={fullName.onChange}
                            onBlur={fullName.onBlur}
                            ref={fullName.ref}
                            name={fullName.name}
                            required
                            minLength={3}
                        />
                    </StyledLabel>
                    <StyledLabel htmlFor="subject">
                        <span>Subject:</span>
                        <StyledInput
                            type="text"
                            id="subject"
                            onChange={subject.onChange}
                            onBlur={subject.onBlur}
                            ref={subject.ref}
                            name={subject.name}
                            required
                            minLength={3}
                        />
                    </StyledLabel>
                    <StyledLabel htmlFor="email">
                        <span>Email:</span>
                        <StyledInput
                            type="email"
                            id="email"
                            onChange={email.onChange}
                            onBlur={email.onBlur}
                            ref={email.ref}
                            name={email.name}
                            required
                        />
                    </StyledLabel>
                    <StyledLabel htmlFor="message">
                        <span>Message:</span>
                        <textarea
                            id="message"
                            onChange={textField.onChange}
                            onBlur={textField.onBlur}
                            ref={textField.ref}
                            name={textField.name}
                            minLength={3}
                            required
                        />
                    </StyledLabel>

                    <button type="submit">Submit</button>
                </StyledForm>
            </ContactWrapper>
        </main>
    );
}

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    gap: 1.1rem;

    button {
        background-color: #ff7f84;
        color: white;
        text-align: center;
        margin-top: 2rem;
        border-radius: 1rem;
        height: 2rem;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    span {
        width: 85px;
    }

    textarea {
        height: 20vh;
        border: none;
        transition: 0.2s;
        border: 1px solid $border-color;
        padding: 0.5rem;
        border-radius: 5px;
        resize: none;

        &:focus {
            outline: none;
        }
    }
`;

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    border-radius: 5px;
`;

const StyledInput = styled.input`
    flex: 1;
    border: none;
    transition: 0.2s;
    border: 1px solid $border-color;
    padding: 0.5rem;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;
