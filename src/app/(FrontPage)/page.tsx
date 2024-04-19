import InstagramFeed from "./InstagramFeed";
import SleepSeries from "./SleepSeries";
import SleepConsultant from "./SleepConsultant";
import Helping from "./Helping";
import RecentOrders from "./RecentOrders";
import ParentsReviews from "./ParentsReviews";
import BlogArticles from "./BlogArticles";
import FreeConsultant from "./FreeConsultant";
import HeroCarousel from "./HeroCarousel";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <SleepSeries />
      <SleepConsultant />
      <ParentsReviews />
      <Helping />
      <RecentOrders />
      <BlogArticles />
      <InstagramFeed />
      <FreeConsultant />
    </>
  );
}

export default Home;