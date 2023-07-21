import React from 'react'

export default function Contact() {
    return (
        <section className="section_contact" id="contact">
            <div>
                <h1 className="h1">Contact Me</h1>
                <p className="text-gray-1">get in touch</p>
            </div>
            <div>
                <div>
                    <h2 className="h2">Talk to me</h2>
                    <div className="border rounded">
                        <svg id="email-svg" width="35" height="35">
                            <use xlinkHref="/css/sprite.svg#email-svg" />
                        </svg>
                        <h2 className="h2">Email</h2>
                        <span className="text-gray-2">reply.nour.it@gmail.com</span>
                        <a href="mailto:reply.nour.it@gmail.com">
                            <span>with me</span>
                            <svg id="arrow-right-svg" width="15" height="15">
                                <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
                            </svg>
                        </a>
                    </div>
                    <div className="border rounded">
                        <svg id="whatsapp-svg" width="37" height="37">
                            <use xlinkHref="/css/sprite.svg#whatsapp-svg" />
                        </svg>
                        <h2 className="h2">Whatsapp</h2>
                        <span className="text-gray-2">+228 91108834</span>
                        <a href="https://wa.me/22891108834?text=salut">
                            <span>with me</span>
                            <svg id="arrow-right-svg" width="15" height="15">
                                <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
                            </svg>
                        </a>
                    </div>
                    <div className="border rounded">
                        <svg id="messanger-svg" width="30" height="30">
                            <use xlinkHref="/css/sprite.svg#messanger-svg" />
                        </svg>
                        <h2 className="h2">Messanger</h2><span className="text-gray-2">nourxxIt</span>
                        <a href="https://www.facebook.com/nourxxIt/">
                            <span>with me</span>
                            <svg id="arrow-right-svg" width="15" height="15">
                                <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="h2">Write to me</h2>
                    <form action="" method="post">
                        <input name="name" id="name" className="border rounded" placeholder="Insert you name" />
                        <input type="email" name="email" id="email" className="border rounded" placeholder="Insert you email" />
                        <textarea name="project" id="project" cols={30} rows={10} className="border rounded"
                            placeholder="Write your project"></textarea>
                        <button type="submit" className="btn">send message
                            <svg width="24" height="24">
                                <use xlinkHref="/css/sprite.svg#prime_send-svg" />
                            </svg>
                        </button>
                        </form>
                    </div>
                </div>
        </section>
    )
}
