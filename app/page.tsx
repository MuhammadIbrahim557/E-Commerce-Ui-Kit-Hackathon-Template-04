
import SofaSec from "./components/sofaSec";
import FeaturedSec from "./components/featuredSec";
import LatestProducts from "./components/latestProducts";
import ShopexOffer from "./components/shopexOffer";
import Unique from "./components/unique";
import TopCategories from "./components/topCategories";
import TrendingSec from "./components/TrendingSec";
import NewsLetter from "./components/newsLetter";
import DiscountItems from "./components/discountItems";
import LatestBlog from "./components/latestBlog";
import Names from "./components/names";
import Twenty23Off from "./components/Twenty23Off";

export default function Home() {
  return (
    
    <div className="  w-[1920px] h-[8032px]">
     
    <SofaSec/>
    <FeaturedSec />
    <LatestProducts/>
    <ShopexOffer/>
    <Unique/>
    <TrendingSec/>
    
    <Twenty23Off/>
    <DiscountItems/>
    <NewsLetter/>
    <Names/>
    <LatestBlog/>
    <TopCategories/>
    </div>
    
  );
}
