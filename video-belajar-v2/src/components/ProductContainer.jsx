import Image1 from "../assets/catalog_assets/product1.jpg"
import Teacher1 from "../assets/catalog_assets/teacher1.png"
import Ratings from "../assets/rating.png"
import ProductCardDesktop from "./ProductCardDesktop"
import ProductCardMobile from "./ProductCardMobile"

export default function ProductContainer() {
    const productList = [
        {
            id: 1,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 2,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 3,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 4,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 5,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 6,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 7,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 8,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },
        {
            id: 9,
            image: Image1,
            productName: "Big 4 Auditor Financial Analyst",
            teacherImage: Teacher1,
            teacherName: "Jenna Ortega",
            teacherExp: "Senior Accountant",
            rating: "3.5",
            ratingImage: Ratings,
            reviewerCount: "86",
            productPrice: "300K"
        },

    ]
    return (
        <div>
            <div className="flex flex-col gap-5 sm:hidden">
                {/* Mobile Width */}
                {productList.map((product) => (
                    <ProductCardMobile
                        key={product.id}
                        product={product} />
                ))}
            </div>

            <div className="hidden sm:flex sm:flex-wrap justify-center gap-y-8 gap-x-6">
                {/* Desktop Width */}
                {productList.map((product) => (
                    <ProductCardDesktop
                        key={product.id}
                        product={product} />
                ))}
            </div>
        </div>
    )
}