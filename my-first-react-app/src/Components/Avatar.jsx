function AvatarComponent({ person, size = 100 }) {
    return (
        <img
            src={`https://react.dev/images/docs/scientists/${person.imageId}.jpg`}
            alt={person.name}
            width={size}
            height={size} />
    )
}

export default function Avatar() {
    return (
        <>
            <AvatarComponent person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
            <AvatarComponent person={{ name: 'Katsuko Saruhashi', imageId: 'MK3eW3As' }} />
            <AvatarComponent person={{ name: 'Aklilu Lemma', imageId: 'yXOvdOSs' }} />
        </>
    );
};


