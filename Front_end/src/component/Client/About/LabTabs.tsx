import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Mới nhất" value="1" />
            <Tab label="Tuyển dụng" value="2" />
            <Tab label="Có thể bạn chưa biết ? " value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div
            style={{
              width: "1000px !important",
              minWidth: "1000px",
              padding: "20px 0",
            }}
            className="container"
          >
            <div className="title_blog">
              <h4>TIN TỨC MỚI NHẤT</h4>
            </div>
            <div className="content_blog row">
              <div className="col-lg-9">
                <img
                  src="https://img.dominos.vn/Pizza+h%E1%BA%A3i+s%E1%BA%A3n+x%E1%BB%91t+c%C3%A0+chua+-+Seafood+delight+c%C3%B3+m%C3%A0u+s%E1%BA%AFc+r%E1%BB%B1c+r%E1%BB%A1%2C+b%E1%BA%AFt+m%E1%BA%AFt+ai+nh%C3%ACn+c%C5%A9ng+m%C3%AA%2C+n%E1%BA%BFm+th%E1%BB%AD+l%C3%A0+ghi%E1%BB%81n!.png"
                  width="100%"
                  alt=""
                />
                <h5>
                  Khám phá cách làm bánh pizza hải sản ngon tại Domino's Pizza
                </h5>
                <p>
                  Chia sẻ 3 cách làm bánh pizza hải sản tại nhà hấp dẫn, nóng
                  hổi vừa thổi vừa ăn cùng Domino’s Pizza với món Ocean Mania,
                  Seafood Delight, Pizzamin Sea… Xem ngay!
                </p>
                <Link to="" className="btn btn-primary">
                  Xem chi tiết
                </Link>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <div
                    className="col-lg-12 col-md-6 col-sm-12"
                    style={{ marginBottom: "20px", overflow: "hidden" }}
                  >
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.YHtjmUczfzQdy_DCno_ehQHaFS&pid=Api&P=0"
                      width="100%"
                      alt=""
                    />
                    <h6>Tìm hiểu 5 loại phô mai làm pizza ngon nức tiếng</h6>
                    <p>
                      Cheese pizza là gì? Đây là một loại pizza được làm từ phô
                      mai
                    </p>
                  </div>
                  <div
                    className="col-lg-12 col-md-6 col-sm-12"
                    style={{ marginBottom: "20px", overflow: "hidden" }}
                  >
                    <img
                      src="https://img.dominos.vn/thumbnail+b32.jpg"
                      alt=""
                      width="100%"
                    />
                    <h6>Tìm hiểu 5 loại phô mai làm pizza ngon nức tiếng</h6>
                    <p>
                      Cheese pizza là gì? Đây là một loại pizza được làm từ phô
                      mai
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ borderBottom: "1px solid black", margin: "30px 0" }}
            ></div>
            <div className="title_blog">
              <h4>CÁC TIN TỨC KHÁC</h4>
            </div>
            <div className="content_other row">
              <div className="col-lg-4">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.dmLGo70IAAaxBM-0a5U3GQHaEK&pid=Api&P=0"
                    height={"300px"}
                    width="100%"
                    alt=""
                  />
                  <h6>Tìm hiểu 5 loại phô mai làm pizza ngon nức tiếng</h6>
                  <p>
                    Cheese pizza là gì? Đây là một loại pizza được làm từ phô
                    mai
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.xOMHJ7BQDvTsGmBoWS3PjwHaHa&pid=Api&P=0"
                    height={"300px"}
                    width="100%"
                    alt=""
                  />
                  <h6>Tìm hiểu 5 loại phô mai làm pizza ngon nức tiếng</h6>
                  <p>
                    Cheese pizza là gì? Đây là một loại pizza được làm từ phô
                    mai
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.Kbso0zVPv_-Qnq0V7B9cEgHaHC&pid=Api&P=0"
                    height={"300px"}
                    width="100%"
                    alt=""
                  />
                  <h6>Tìm hiểu 5 loại phô mai làm pizza ngon nức tiếng</h6>
                  <p>
                    Cheese pizza là gì? Đây là một loại pizza được làm từ phô
                    mai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
