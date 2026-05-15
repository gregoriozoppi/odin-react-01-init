import { createElement } from 'react';

function Greeting({ name }) {
    return createElement(
        'h1',
        { className: 'rawGreeting' },
        'Hello ',
        createElement('i', null, name),
        '. Welcome!'
    );
}

export default function RawGreeting() {
    return createElement(Greeting, { name: 'Odin' });
}