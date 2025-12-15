

export default function ProductCardDesktop({ product }) {
    return (
        <div
            className="
                    flex
                    flex-col 
                    bg-white 
                    rounded-xl 
                    overflow-hidden 
                    max-w-[426px] 
                    gap-4 
                    p-5
                    ">
            {/* Card container */}
            <img src={product.image} alt="" className="w-full h-[193px] object-cover rounded-xl" />

            <div className="
                flex
                flex-col
                ">
                {/* Product info */}
                <h5 className="text-lg font-semibold font-poppins">{product.productName}</h5>
                <p className="text-base font-medium text-gray-500
                    font-dm-sans line-clamp-2">{product.productDesc}</p>
            </div>

            <div className="flex gap-2.5">
                {/* Teacher info */}
                <img src={product.teacherImage} alt="" className="w-10 h-10 object-contain rounded-md" />

                <div className="
                        flex
                        flex-col
                        ">
                    <h6 className="
                            text-base
                            font-semibold
                            ">
                        {product.teacherName}
                    </h6>
                    <span className="
                            text-sm
                            text-gray-400">
                        {product.teacherExp} di <span className="text-black/40 font-bold">Gojek</span>
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center">
                {/* Ratings & price */}
                <div className="flex items-center">
                    <img src={product.ratingImage} alt="" className="h-[18px]" />
                    <p className="
                            text-base
                            font-medium
                            font-dm-sans
                            underline decoration-1
                            text-gray-500
                            ">{product.rating} ({product.reviewerCount})</p>
                </div>
                <p className="
                        text-2xl
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