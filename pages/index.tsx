import Head from 'next/head'
import Image from 'next/image'
import ImageSlider from '../src/components/ImageSlider/ImageSlider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <ImageSlider />
      <h1>Welcome to our website</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Itaque ipsum esse enim repellendus perspiciatis. Odit eum 
        molestiae quod obcaecati expedita reiciendis similique, 
        dolorum perspiciatis praesentium, totam ex ad impedit sunt 
        ipsum velit? Maxime cum nostrum ad dolores minus doloremque 
        possimus illum nesciunt iste saepe pariatur cupiditate similique 
        harum modi laboriosam alias consequuntur velit quam, ea expedita 
        asperiores soluta vel porro temporibus. Quis error, magni natus 
        commodi molestiae cupiditate nam delectus explicabo fugit. 
        Ad ratione quae omnis architecto aperiam eligendi enim voluptas, 
        consequuntur magnam nobis, doloremque dolor non amet sint, 
        repudiandae voluptatibus. Inventore, voluptatum dolore cumque 
        quasi consequatur, quos voluptate deleniti libero saepe tempore sunt, 
        tempora beatae. Exercitationem ipsum impedit veniam nemo, animi dolor 
        tempora mollitia numquam voluptatum unde voluptatem autem.</p>
        
    </div>
  )
}
