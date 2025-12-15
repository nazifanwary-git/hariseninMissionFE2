import CategoryList from "./CategoryList";


export default function CategorySelection({ selected }) {
    return (
        <div className="flex gap-9 whitespace-nowrap">
            <CategoryList selected>Semua Kelas</CategoryList>
            <CategoryList>Pemasaran</CategoryList>
            <CategoryList>Desain</CategoryList>
            <CategoryList>Pengembangan Diri</CategoryList>
        </div>
    )
}