import Layout from "./Layout"
import ServiceDetail from "../components/ServiceDetail"
import Product from "../components/Product"

const Service = () => {
  return (
    <div>
        <Layout page="SERVICE">
            <ServiceDetail/>
            <Product/>
        </Layout>
    </div>
  )
}

export default Service