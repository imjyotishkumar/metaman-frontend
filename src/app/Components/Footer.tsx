import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-5 p-4 flex justify-around items-center'>
        <Link href={`https://drive.google.com/file/d/10ZgZxP3NsTws0IKA4NpibgutF3q84RmQ/view?usp=drive_link`}>
        <button>Cancellation & Refund Policy</button>

        </Link>
        <Link href={`https://drive.google.com/file/d/1-AiI2TuZ8fuZYL_4yLiCFiprMhrqsQoj/view?usp=drive_link`}>
        <button>Terms & Conditions</button>
        </Link>
        <Link href={`https://drive.google.com/file/d/1HIypkWqx5x1DY_h7UVrPCPPo3Fm6erES/view`}>
        <button>Contact Us</button>
        </Link>
    </div>
  )
}

export default Footer