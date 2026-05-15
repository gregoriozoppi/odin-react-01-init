import AvatarApp from './AvatarComponent.jsx'

function ChildrenComponent({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

export default function ChildrenApp() {
    return (
        <ChildrenComponent>
            <AvatarApp />
        </ChildrenComponent>
    );
}