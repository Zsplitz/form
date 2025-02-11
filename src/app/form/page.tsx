'use client'
import React, { FormEvent } from "react";

export default function form() {
    async function handleSubmit(formEvent: FormEvent) {
        formEvent.preventDefault()
        console.log(formEvent)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder="name" type="text" />
                <input name='email' placeholder="Email" type="text" />
                <input name='message' placeholder="Message" type="text" />
                <input name='adress' placeholder="Adress" type="text" />
                <input name='town' placeholder="Town" type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}