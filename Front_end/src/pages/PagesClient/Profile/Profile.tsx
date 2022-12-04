import axios from "axios";
import React ,{useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";
import { User } from "../../../interface/user";

type Props = {};
const Profile = () => {
  const [user,setUser] = useState<User>()
  const {id} = useParams();
  useEffect(() => {
    (
      async () => {
        try {
          const {data} = await axios.get(`http://localhost:3001/user/${id}`)
          setUser(data.data)
        } catch (error) {
          
        }
      }
    )()
  },[])
  return (
    <div>
      <div className="profile_container">
      <div className="profile_heading">
        <h3>HELLO !</h3>
        <p>MY PERSONAL INFORMATION</p>
      </div>
      <div className="row profile_content">
        <div className="col-lg-4 profile_avt">
          <img
            src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/318218750_6855264907852704_7346251176104172439_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=0xRdJoXQL5MAX_WQEzm&_nc_ht=scontent.fhan5-1.fna&oh=00_AfDO5E0SHrX5I_NnnOlBzlB_zGP_ub2TOqZjfWxs8Pnt-Q&oe=638F701C"
            alt=""
          />
        </div>
        <div className="col-lg-4 profile_about">
          <h5>ABOUT ME</h5>
          <p>
            I am an allround web developer. I am a senior programmer with good
            knowledge of front-end techniques. Vitae sapien pellentesque
            habitant morbi tristique senectus et. Aenean sed adipiscing diam
            donec adipiscing tristique risus.{" "}
          </p>
          <Link to="">LEARN MORE</Link>
        </div>
        <div className="col-lg-4">
          <h5>DETAIL</h5>
          <h6>Name</h6>
          <p>Name</p>
          <h6>Phone </h6>
          <p>Phone</p>
          <h6>Email </h6>
          <p>Email</p>
          <h6>Address </h6>
          <p>Addres</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
