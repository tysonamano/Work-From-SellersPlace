import React from "react";
import BlogsList from "../../../../components/blogs/BlogsList";
import NavBarNew from "../NavBarNew";
import Cover from "../Cover";
import Footer from "../Footer";
//import * as Styles from "./css/PublicBlogsList.module.css";
//import Styles from "../Home.module.css";
function PublicBlogsList(props) {
  return (
    <div>
      <div>
        <NavBarNew {...props} />
      </div>
      <div>
        <Cover
          backgroundImage={"url(/img/Bg_Events.jpg)"}
          coverTitle={"Blogs"}
          coverBody={"Check out these vendors and their experiences!"}
          showWidget={false}
        />
      </div>
      <div>
        <BlogsList isPublic={true} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PublicBlogsList;
