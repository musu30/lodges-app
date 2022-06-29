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
import Appbar from "../../components/AppBar/Appbar";

function RoomSettingsForm() {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const [catName, setCatName] = useState(null);

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

  const handleClickAddCategory = () => {
    console.log("clicked add category");
    let data = [...types];
    let flag = true;
    data.map((item) => {
      if (item.type === catName) {
        flag = false;
        return;
      }
    });
    if (data && flag) {
      data.push({
        type: catName,
        values: [],
      });
      setTypes(data);
    }
  };

  const validateDuplication = (val) => {
    let newtypes = [...types];
    let flag = true;
    newtypes.map((item) => {
      if (item.values.length > 0) {
        item.values.map((value) => {
          if (value.room__number == val) {
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
            <Appbar  logo="true" />   
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
                label="Room Settings"
              />
            </Box>
          </Stack>
          <Grid
            container
            spacing={3}
            style={{ paddingLeft: "10px", paddingTop: "20px" }}
          >
            <Grid item lg={6} md={6} sm={12}>
              <Box>
                <CustomLabel label="Enter Total Number Rooms" />

                <CustomTextField
                  placeholder="total_rooms"
                  border="1px solid #707070"
                  borderRadius="10px"
                  height="0px"
                  name="total_rooms"
                  register={register}
                />
              </Box>
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

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
            style={{ paddingTop: "20px" }}
          >
            <Button
              variant="contained"
              style={{
                width: "150px",
                background: "grey",
              }}
              onClick={handleClickCategory}
            >
              CANCEL
            </Button>
            <Button
              variant="contained"
              style={{
                width: "150px",
                background: "#00BEB8",
              }}
              onClick={handleClickSave}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{
                width: "150px",
                background: "#00BEB8B3",
              }}
              onClick={handleClickCategory}
            >
              + Add category
            </Button>
          </Stack>
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
            paddinngLeft: "100px",
          },
          "& .MuiDialogContent-root": {
            border: "none",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
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

            <TextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              value={catName}
              onChange={(e) => {
                setCatName(e.target.value);
              }}
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
            style={{
              width: "100px",
              background: "#00BEB8",
            }}
            variant="contained"
            onClick={() => {
              console.log("clicked save");
              handleClickAddCategory();
              setCatName(null);
              setCatOpen(false);
            }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            style={{
              width: "100px",
              background: "#00000029",
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
