import RammusFooter from '@/../assets/img/rammus footer.png';
import Image from 'next/image';

export default function BarraCategorias() {
  return (
    <aside className="mr-4 p-4">
      <Image src={RammusFooter} width={200} className="pb-2" />
      <div className="space-y-2 overflow-auto">
        <div>
          <span className="font-semibold">Todos os Produtos</span>
        </div>
        <div>
          <span>Promoções</span>
        </div>
        <div>
          <span>Acessórios</span>
        </div>
        <div>
          <span>Objetos</span>
        </div>
        <div>
          <span>Vestuário</span>
        </div>
      </div>
    </aside>
  );
}
