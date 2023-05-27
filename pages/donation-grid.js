// import DonutChart from "../src/components/DonutChart";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import PatnerLogoSlider from "../src/components/PatnerLogoSlider";
import Layouts from "../src/layouts/Layouts";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const DonationGrid = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Donation Grid"} />
      <section className="donation-section">
        <div className="theme_container">
          <div className="title-box text-center">
            <div className="sub-title mb-20">
              <span className="title-sep-left">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
              Popular Causes
              <span className="title-sep-right">
                <img src="assets/images/resource/icon-4.png" alt="" />
              </span>
            </div>
            <h2 className="sec-title">
              How We Help People For <br /> Charity Foundation
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img src="assets/images/resource/charity.jpg" alt="" />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          {/* <input
                            type="text"
                            className="dial"
                            data-fgcolor="#f74f22"
                            data-bgcolor="none"
                            data-width={75}
                            data-height={75}
                            data-linecap="normal"
                            defaultValue={75}
                          /> */}
                          <DonutChart value={75} color={"#f74f22"} />

                          <div className="inner-text count-box">
                            <Counter end={75} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-2.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#65c9bb"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-3.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#ffac00"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-4.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          {/* <input
                            type="text"
                            className="dial"
                            data-fgcolor="#e400ff"
                            data-bgcolor="none"
                            data-width={76}
                            data-height={75}
                            data-linecap="normal"
                            defaultValue={75}
                          /> */}
                          <DonutChart value={76} color={"#e400ff"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-5.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#0006ff"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-6.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#f74f22"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-7.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#f74f22"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-8.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#ffac00"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="causes-block style-two">
                <div className="image">
                  <img
                    src="assets/images/resource/Donation_Grid-9.jpg"
                    alt=""
                  />
                  <div className="progress-wrap">
                    <div className="progress-box">
                      <div className="inner-box">
                        <div className="graph-outer">
                          <DonutChart value={76} color={"#65c9bb"} />

                          <div className="inner-text count-box">
                            <Counter end={76} />
                            <span className="count-Parsent">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Education</h4>
                      <div className="text">
                        Raised<span className="crl4"> $256</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-content">
                  <h4>
                    Raise Hand To The Poor Children Education For Better Future
                  </h4>
                  <ul>
                    <li>
                      Goal<span>$34562</span>
                    </li>
                    <li>
                      Raise<span className="crl2">$562</span>
                    </li>
                    <li>
                      To Go<span className="crl3"> $864</span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <a className="primary_btn style-two">
                      Donation
                      <i className="far fa-heart" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PatnerLogoSlider />
    </Layouts>
  );
};
export default DonationGrid;
