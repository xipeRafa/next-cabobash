import Nav from './Nav'
import Head from 'next/head'

const Container = (props) => {
      return (
            <div>
                  <Head>
                        <title>cabobash</title>
                  </Head>
                    
                  <div>banner</div>  
                  <Nav />

                  <div className='container'>
                       {props.children}
                  </div>  
            </div>
      )
}

export default Container
