import Link from "next/link";
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-title"
      style={{
        backgroundImage: "url(assets/images/resource/bg-page-title.jpg)",
      }}
    >
      <div className="theme_container">
        <div className="content-box">
          <div className="shape">
            <img src="assets/images/resource/star-icon-2.png" alt="" />
          </div>
          <div className="shape-two">
            <img src="assets/images/resource/page-title-1.png" alt="" />
          </div>
          <div className="shape-three">
            <img src="assets/images/resource/icon-3.png" alt="" />
          </div>
          <div className="content-wrapper">
            <div className="title">
              <h1>{pageTitle ? pageTitle : pageName}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
