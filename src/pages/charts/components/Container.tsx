type Props = {
    children: React.ReactNode;
};

export function Container({ children }: Props) {
    return (
        <div
            className="flex flex-col bg-white rounded-lg 
                overflow-hidden shadow-lg p-0 border border-zinc-900"
        >
            {children}
        </div>
    );
}
