import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel";
import CustomTextField from "../../components/CustomTextField";
import styles from "./roomsettingsform.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import RoomSection from "../../components/RoomSection/RoomSection";

function RoomSettingsForm() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const inputRef = React.useRef();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes([
      {
        type: "test",
        values: [
          { room__number: 10, room_type_id: 1 },
          { room__number: 12, room_type_id: 3 },
        ],
      },
      {
        type: "test333",
        values: [{ room__number: 10, room_type_id: 1 }],
      },
    ]);
  }, []);

  const [catopen, setCatOpen] = useState(false);

  const handleClickCategory = () => {
    console.log("reached here");
    setCatOpen(true);
  };

  const validationSchema = yup.object().shape({
    total_rooms: yup.number().required("Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data) => {
    data.height = 5.4;
    console.log("clicked submit data =>", data);
    reset();
  };

  const handleClickEditable = (e, index) => {
    e.preventDefault();
    console.log("called parent");
    let newtypes = [...types];

    newtypes.map((item, itemindex) => {
      if (itemindex === index) {
        // setTypes(...types);
        newtypes[index]["values"].push({ room__number: "", room_type_id: 0 });
      }
    });
    setTypes(newtypes);
  };
  const handleToAddRoom = (e, index) => {
    console.log("called child");

    let newtypes = [...types];
    if (validateDuplication(e.target.value)) {
      newtypes.map((item, itemindex) => {
        if (itemindex === index) {
          // setTypes(...types);
          newtypes[index]["values"].push({
            room__number: e.target.value,
            room_type_id: 0,
          });
        }
      });
      setTypes(newtypes);
    } else {
      console.log("duplication");
    }


  };

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 3) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  };

  const handleChangeValue = (event, index, objIndex) => {
    // validateDuplication(event.target.value)

    let newtypes = [...types];

    newtypes.map((item, itemindex) => {
      if (itemindex === index) {
        // setTypes(...types);
        newtypes[index]["values"][objIndex].room__number = event.target.value;
      }
    });
    setTypes(newtypes);
  };

  const handleClickSave = () => {
    console.log(types);
  };

  const validateDuplication = (val) => {
    let newtypes = [...types];
    let flag = true;
    newtypes.map((item) => {
      if (item.values.length > 0) {
        item.values.map((value) => {
          if (value.room__number == val) {
            console.log("vakkkkkk---",val)
            flag = false;
            return flag;
          }
        });
      }
    });
    return flag;
  };

  return (
    <Box id={styles.mainbox} flex={4}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <Stack>
            <Box id={styles.firstbox}>
              <img
                style={{ width: "14px", height: "24px" }}
                src="/images/Icon_left_arrow.png"
                onClick={(item) => {
                  navigate(-1);
                }}
              />
              <CustomLabel
                style={{ paddingLeft: "30px!important" }}
                label="Manage Your Account"
              />
            </Box>
          </Stack>
          <Grid
            container
            spacing={3}
            style={{ paddingLeft: "10px", paddingTop: "20px" }}
          >
            <Grid item lg={12} md={12} sm={12}>
              <Box>
                <CustomLabel label="Total Rooms" />

                <CustomTextField
                  placeholder="total_rooms"
                  border="1px solid #707070"
                  borderRadius="10px"
                  height="0px"
                  name="total_rooms"
                  register={register}
                />
              </Box>

              {/* <Stack
                  direction="row"
                  sx={{
                    paddingTop: "40px",
                  }}
                  spacing={2}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "grey",
                    }}
                  >
                    CANCEL
                  </Button>
                  <Button type="submit" variant="contained">
                    SAVE
                  </Button>
                </Stack> */}
            </Grid>
          </Grid>
          <Box>
            <Grid container style={{ paddingLeft: "10px", paddingTop: "20px" }}>
              {types.map((data, blockIndex) => {
                return (
                  <RoomSection
                    blockIndex={blockIndex}
                    data={data}
                    handleClickEditable={handleClickEditable}
                    handleChangeValue={handleChangeValue}
                    handleToAddRoom={handleToAddRoom}
                  />
                );
              })}
            </Grid>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" onClick={handleClickCategory}>
              Add category
            </Button>
            <Button variant="contained" onClick={handleClickSave}>
              Save
            </Button>
          </Box>
        </Box>
      </form>

      <Dialog
        //   onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={catopen}
        sx={{
          "& .MuiPaper-root": {
            background: "#00BEB9!important",
            borderRadius: "20px",
          },
          "& .MuiDialogContent-root": {
            border: "none",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <CustomLabel label="Take Photo" />
          <IconButton
            aria-label="close"
            onClick={() => {
              setCatOpen(false);
            }}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "black",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Box>
            <CustomLabel label="Enter Category" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
        </DialogContent>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          sx={{
            paddingBottom: "25px",
            marginTop: "10px",
          }}
        >
          <Button
            // sx={{
            //   color: "white",
            // }}
            variant="contained"
            onClick={() => {
              console.log("clicked save");
            }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#00D5CF",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            onClick={() => {
              setCatOpen(false);
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Dialog>
    </Box>
  );
}

export default RoomSettingsForm;
