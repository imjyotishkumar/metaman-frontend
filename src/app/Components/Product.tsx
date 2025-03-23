import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  id: string;
  image: string;
  title: string;
  newprice: number;
  oldprice: number;
}

const Product = (props: ProductProps) => {
  return (
    <div className='cursor-pointer'>
        <Link href={`/checkout?${props.id}`}>
        <div>
            <Image src={`${props.image}`} alt='' width={400} height={400} className='h-[60vh]'/>
        </div>
        <div className='flex items-center justify-center mt-3 text-[#B9B9BA] text-[18px] font-bold'>{props.title}</div>
        <div className='flex items-center justify-center mt-2 gap-5'>
            <p className='font-[800] text-[16px]'> From Rs. {props.newprice}</p>
            <p className='text-[#B9B9BA] line-through'> Rs. {props.oldprice}</p>
        </div>
        </Link>
    </div>
  )
}

export default Product