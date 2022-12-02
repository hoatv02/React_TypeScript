import React, { useContext } from "react";
import { User } from "../../../interface/user";
import { ThemesContext } from "../../../utils/ThemeContext";

type Props = {};
const Profile = () => {

  const profiles = useContext(ThemesContext);

  return (
    <div>
      {profiles ? (
         <div>
          <p>Email:</p>
          <p>Phone:</p>
          <p>Address:</p>
        </div>
      ) : (
       <p>404</p>
      )}
    </div>
  );
};

export default Profile;
