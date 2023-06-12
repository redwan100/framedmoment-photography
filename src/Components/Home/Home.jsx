import Banner from "../../Pages/Home/Banner/Banner"
import PopularClass from "../../Pages/Home/PopularClass/PopularClass"
import PopularInstructor from "../../Pages/Home/PopularInstructor/PopularInstructor"
import WhatWeProvide from "../../Pages/Home/WhatWeProvide/WhatWeProvide"

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <PopularInstructor /> */}
      <PopularClass />
      <WhatWeProvide />
    </div>
  )
}

export default Home