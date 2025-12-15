

export default function ProductCardMobile({ product }) {
    return (
        <div className="flex flex-col p-4 bg-white">
            {/* Card Container */}
            <div className="flex gap-3 items-center mb-2">
                {/* Image & infos */}
                <img src={product.image} alt="" className="w-[82px] h-[82px] rounded-md" />

                <div className="flex flex-col gap-2">
                    {/* Product info */}
                    <h6 className="text-base font-semibold font-dm-sans">{product.productName}</h6>

                    <div className="flex gap-2">
                        {/* Teacher container */}
                        <img src={product.teacherImage} alt="" className="w-9 h-9 rounded-md" />
                        <div className="flex flex-col">
                            {/* Teacher info */}
                            <p className="text-sm font-medium font-dm-sans">{product.teacherName}</p>
                            <p className="text-xs">{product.teacherExp}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex justify-between items-center">
                {/* Ratings & price */}
                <div className="flex items-center">
                    <img src={product.ratingImage} alt="" className="h-[18px]" />
                    <p className="
                            text-xs
                            font-medium
                            font-dm-sans
                            underline decoration-1
                            text-gray-500
                            ">{product.rating} ({product.reviewerCount})
                    </p>
                </div>

                <p className="
                        text-xl
                        font-poppins
                        font-semibold
                        text-green-500
                        ">
                    Rp {product.productPrice}
                </p>
            </div>

        </div>
    )
}