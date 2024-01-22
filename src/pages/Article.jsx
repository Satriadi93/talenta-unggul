import Layout from "./Layout"
import ArticleList from "../components/ArticleList"

const Article = () => {
  return (
    <div>
        <Layout page="ARTICLE">
            <ArticleList/>
        </Layout>
    </div>
  )
}

export default Article