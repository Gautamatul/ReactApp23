
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Account } from './Account'
import { Accounts } from './Accounts'
import { Home } from './Home'
import { Menu, Button } from 'semantic-ui-react';
export function AppRouter() {
    const [activeItem, setActiveItem] = useState("/")
    // accounts is store for accounts related activities so accounts is store name and then accounts is key from story.
    const handleItemClick = (e, { name }) => {
        console.log(name)
        setActiveItem(name)
    }

    return (
        <div class="ui teal four item inverted menu">
                <a header name='home' 
                class="item"
                active = {activeItem == 'home'}  
                onClick={handleItemClick}>
                     <Link to="/home">
                        Home
                    </Link></a>

                <a
                    class="item"
                    name='newAccount'
                    active={activeItem === 'newAccount'}
                    onClick={handleItemClick}
                >
                    <Link to="/newAccount">
                        New Account
                    </Link>

                </a>
                <a
                    class="item"
                    name='accounts'
                    active={activeItem === 'accounts'}
                    onClick={handleItemClick}
                >
                    <Link to="/accounts">
                        Account
                    </Link>
                </a>
                <a
                    class="item"
                    name='aboutMe'
                    active={activeItem === 'aboutMe'}
                    onClick={handleItemClick}
                >
                    <Link to="/aboutMe">
                        About Me
                    </Link>

                </a>

        </div>
    )
}