import React from 'react'
import { Button } from "./components/Button"

export const Home = () => (
    <div>
        <h2>Hello World</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu cursus euismod. Hac habitasse platea dictumst quisque sagittis. Euismod quis viverra nibh cras pulvinar mattis nunc. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Facilisi cras fermentum odio eu.</p>
        <p>Amet mattis vulputate enim nulla. Eleifend donec pretium vulputate sapien nec sagittis. Velit egestas dui id ornare arcu odio ut. Aliquam eleifend mi in nulla.</p>
        <p>Porttitor lacus luctus accumsan tortor. Semper feugiat nibh sed pulvinar proin. Risus ultricies tristique nulla aliquet enim tortor at. Consequat ac felis donec et odio.</p>
        <Button onClick={() => {console.log("You Clicked on me!")}}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large"
        >Learn more</Button>
    </div>
)