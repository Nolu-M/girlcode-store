import React from 'react'

export default function() {
    return (
        <header className="header-base">
            <div className="header-contact">
                <span class="material-symbols-outlined">phone</span>
                <a href="+27 11 546 7899" className="contact-number">+27 11 546 7899</a>
            </div>
            <div className="header-info">
                <p>Get 50% off on Selected Items | <a href="#">Shop now</a></p>
            </div>
            <div className="header-dropdown">
                <select name="language" id="language">
                    <option value="english">English</option>
                    <option value="IsiXhosa">Xhosa</option>
                    <option value="IsiZulu">IsiZulu</option>
                </select>
                <select name="location" id="location">
                    <option value="location">Location</option>
                    <option value="cape-town">Cape Town</option>
                    <option value="johannesburg">Johannesburg</option>
                    <option value="durban">Durban</option>
                </select>
            </div>
        </header>

    )
}