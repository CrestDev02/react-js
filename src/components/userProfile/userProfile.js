import React, { useEffect } from "react";
import CustomTextField from "../common/customTextField";
import { Button, Card, Grid, TextField } from "@mui/material";
import "../../styles/profilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editForm } from "../../redux/slices/userProfile/profileSlice";
import {
  clearEditedText,
  editUserDetails,
} from "../../redux/slices/userProfile/profileSlice";
const UserProfileDetails = () => {
  const dispatch = useDispatch();
  const { name, email, edit } = useSelector((store) => store.user);

  let newName = localStorage.getItem("name");
  let newEmail = localStorage.getItem("email") ?? email;

  const handleSubmit = (e) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    // setEdit(false);
    dispatch(editForm());
    toast.success("Profile updated successfully!");
  };

  useEffect(() => {
    dispatch(editUserDetails({ newName, newEmail }));
    localStorage.setItem("name", newName);
    localStorage.setItem("email", newEmail);
  }, [newName, newEmail]);

  return (
    <div>
      <section>
        <ToastContainer />
        <div className="profile-card">
          <h1 className="heading-name">Welcome {name} !!!</h1>
          <Card
            className="card-container"
            // sx={{ minWidth: "800px", padding: "20px 50px 50px 50px" }}
            variant="outlined"
          >
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-gray-800 leading-tight tracking-wide mb-3">
                User Profile
              </h1>
              <button
                onClick={() => {
                  dispatch(editForm());
                }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {!edit ? "Edit Details" : "Close"}
              </button>
            </div>
            <Grid container className="profile-form">
              <Grid item xs={12} md={6}>
                <CustomTextField
                  disabled={!edit}
                  style={{ width: "100%" }}
                  label="Name"
                  placeholder="Name"
                  name="name"
                  value={name}
                  otherProps={{
                    onChange: (event) => {
                      dispatch(
                        editUserDetails({
                          newName: event.target.value,
                          newEmail,
                        })
                      );
                    },
                  }}
                />
              </Grid>
              {/* email */}
              <Grid item xs={12} md={6}>
                <CustomTextField
                  style={{ width: "100%" }}
                  disabled={!edit}
                  label="Email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  otherProps={{
                    onChange: (event) => {
                      dispatch(
                        editUserDetails({
                          newName,
                          newEmail: event.target.value,
                        })
                      );
                    },
                  }}
                />
              </Grid>
              {edit && (
                <Grid xs={12} md={12} px={1} pb={1}>
                  <div
                    style={{ marginTop: "20px" }}
                    className="text-center createAcBtn mt-5"
                  >
                    <Button
                      onClick={() => {
                        dispatch(editForm());
                        dispatch(clearEditedText());
                      }}
                      sx={{
                        padding: "10px 15px",
                        borderRadius: "10px",
                        marginRight: "20px",
                      }}
                      className="popup_Btn other_popup_btn mx-2"
                      variant="contained"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      variant="contained"
                      sx={{
                        padding: "10px 15px",
                        borderRadius: "10px",
                        marginLeft: "20px",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              )}
            </Grid>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UserProfileDetails;
