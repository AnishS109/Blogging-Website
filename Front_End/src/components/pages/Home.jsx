import { Grid } from "@mui/material";
import Layout from "../../Layout/Layout";
import Banner from "../Home_Component/Banner"
import Categories from "../Home_Component/Categories.jsx"

const Home = () => {
  return (
    <Layout>
    <Banner/>
    <Grid container>

      <Grid lg={2} sm={3} xs={12}>

    <Categories/>

      </Grid>

      <Grid container item xs={12} sm={10} lg={10}>
        POSTS
      </Grid>

    </Grid>
    </Layout>
  )
}

export default Home;