interface TheadProps {
    children: React.ReactNode;
}

export function Thead({ children }: TheadProps) {
    return <thead className="">{children}</thead>;
}
