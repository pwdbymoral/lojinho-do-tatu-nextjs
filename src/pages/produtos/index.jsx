import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RammusFooter from "@/../assets/img/rammus footer.png"
import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";
import Cupcake from '../../../assets/img/cupcake.webp'
import Boia from '../../../assets/img/boia.webp'
import Flag from '../../../assets/img/balenciaga_flag.webp'
import Gloves from '../../../assets/img/gloves.webp'

function Produtos() {
    return (
        <div>
            <Navbar />
            <section className="container min-h-[77vh] mx-auto grid grid-cols-5 py-4 divide-x divide-gray-400">
                <div className="mr-4 p-4">
                    <Image src={RammusFooter} width={200} className="pb-2" />
                    <div className="overflow-auto space-y-2">
                        <div><span className="font-semibold">Todos os Produtos</span></div>
                        <div><span>Promoções</span></div>
                        <div><span>Acessórios</span></div>
                        <div><span>Objetos</span></div>
                        <div><span>Vestuário</span></div>
                    </div>

                </div>
                <div className="pl-4 grid grid-cols-3 gap-4 col-span-4">
                    <ProductCard image={Gloves} name={'Par de luvas premium'} price={'R$52,00'} />
                    <ProductCard image={Flag} name={'Bandeira Balenciaga'} price={'R$4.000,00'} />
                    <ProductCard image={Cupcake} name={'Cupcake - Action Figure'} price={'R$657,99'} />
                    <ProductCard image={Boia} name={'Boia'} price={'R$30,00'} />
                </div>

            </section>
            <Footer />

        </div>
    )
}

export default Produtos;