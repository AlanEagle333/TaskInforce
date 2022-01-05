import Image from 'next/image'
import { prependOnceListener } from 'process'
import styles from '../styles/Home.module.css'


type ProductProps = {
    name: string
    id: number
    imgUrl: string
}

const Product = (props: ProductProps) => {
  const longName = props.name + 'wowowow'
  
  
  return (
    <div className={styles.card}>
      <div className={styles.imgSize}>
      <img src={props.imgUrl} />
      </div>
      <div>{props.name}</div>
      <div className={styles.price}>$3.99</div>
      <div className={styles.details}>This is a great shampoo for cleaning</div>
    </div>
  )
}



export default Product


