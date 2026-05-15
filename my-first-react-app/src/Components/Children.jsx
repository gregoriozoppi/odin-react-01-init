import Avatar from './Avatar.jsx'

function ChildrenComponent({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Children() {
    return (
        <ChildrenComponent>
            <Avatar />
        </ChildrenComponent>
    );
}