import { useMemo, useState } from "react"

interface Product {
    id: number
    name: string
    price: number
}

const products: Product[] = Array.from({length: 5000}, (_, i) => ({
    id: i,
    name: `Sản phẩm ${i+1}`,
    price: Math.floor(Math.random() * 1000) + 10
}))


const Bai3 = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [minPrice, setMinPrice] = useState<number>(0)

    const startTime = performance.now()

    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            return p.name.toLowerCase().includes(searchTerm.toLowerCase()) && p.price >=  minPrice
        })
    }, [searchTerm, minPrice])

    const totalAmount = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
    }, [filteredProducts]);

    const endTime = performance.now()

    console.log(`Thời gian xử lý từ ${startTime} - ${endTime}: ${endTime - startTime} ms`);

    return (
    <div>
      <input 
        placeholder="Tìm tên..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Giá tối thiểu" 
        onChange={(e) => setMinPrice(Number(e.target.value))} 
      />
      
      <h3>Tổng tiền: {totalAmount} USD</h3>
      <p>Số lượng tìm thấy: {filteredProducts.length}</p>
    </div>
  );
}


export default Bai3
