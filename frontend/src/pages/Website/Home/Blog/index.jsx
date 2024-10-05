import { categories1, chittoCancio, susanKomen } from "@/assets/img";
import { BlogCard } from "@/components/Card";
import { Container } from "@/components";
import "../HomePage.css";

export const Blog = () => {
  return (
    <section className="blogs">
      <Container>
        <h2>Our Blogs</h2>
        <div className="blog-grid">
          <BlogCard
            src={categories1}
            Author={"Author"}
            Title={"Blog Post Title"}
            Date={"Date"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
          <BlogCard
            src={categories1}
            Author={"Author"}
            Title={"Blog Post Title"}
            Date={"Date"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
          <BlogCard
            src={chittoCancio}
            Author={"Author"}
            Title={"Blog Post Title"}
            Date={"Date"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
          <BlogCard
            src={susanKomen}
            Author={"Author"}
            Title={"Blog Post Title"}
            Alt={"Blog post"}
            Date={"Date"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
      </Container>
    </section>
  );
};
