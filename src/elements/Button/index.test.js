import React from 'react'
import { getByText, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from '.'


test("button llowed click button if IsDisalabe is present", () => {
    const {container} = render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
});

test("Shouid render loading/spiner", () => {
    const {container, getByText } = render(<Button isLoading></Button>);
    
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
});

test("Shouid render <a> tag", () => {
    const {container} = render(<Button type='link' isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
});

test("Shouid render <Link> component", () => {
    const {container} = render(
        <Router>
            <Button href="" type='Link'></Button>
        </Router>
    );

    expect(container.querySelector('a')).toBeInTheDocument()
});