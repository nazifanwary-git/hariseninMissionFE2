

export default function CategoryList({ selected = false, children, ...props }) {
    return (
        <>
            {selected ? (
                <div className="flex flex-col">
                    <span className="
                    py-3
                    text-orange-400
                    font-dm-sans
                    text-sm
                    font-medium">
                        {children}
                    </span>
                    <div className="
                    border-b-6
                    w-[52px]
                    border-orange-400
                    rounded-md"></div>
                </div>
            ) : (
                <span className="
                    py-3
                    text-black/40
                    font-dm-sans
                    text-sm
                    font-medium
                    sm:text-base"
                >{children}
                </span>
            )}
        </>
    )
}