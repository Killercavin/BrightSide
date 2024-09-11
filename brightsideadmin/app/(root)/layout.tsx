interface SeupLayoutProp {
    children: React.ReactNode;
}

const SeupLayout = ({ children }: SeupLayoutProp) => {
    return (
        <>
            {children}
        </>
    );
};

export default SeupLayout;