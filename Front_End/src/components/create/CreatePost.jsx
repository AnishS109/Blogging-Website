import { Box, TextField, Button, Typography, IconButton, Divider } from "@mui/material";
import Layout from "../../Layout/Layout";
import { AddCircle as Add } from "@mui/icons-material";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    picture:"",
    username:"",
    category:"",
    createdDate: new Date()
  });

  const [file, setFiles] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {

    const getImg = () => {
      if(file){
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)
      }
    }

  },[])

  return (
    <Layout>
      {/* Outer Container with Gradient */}
      <Box
        sx={{
          background: "rgb(180, 180, 180)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        {/* Form Card */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          {/* Header Image */}
          <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
            <img
              src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="Header"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
              onChange={(e) => setFiles(e.target.files[0])}
            />
            <label htmlFor="fileInput">
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                  "&:hover": { bgcolor: "black", color: "white" },
                  transition: "all 0.3s ease",
                }}
                component="span"
              >
                <Add sx={{ fontSize: 36 }} />
              </IconButton>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </Box>

          {/* Content Section */}
          <Box sx={{ padding: "24px 32px" }}>
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: "600",
                color: "#333",
                textAlign: "center",
              }}
            >
              Create a New Blog Post
            </Typography>

            <Divider sx={{ mb: 3, bgcolor: "#ddd" }} />

            {/* Title Input */}
            <TextField
              label="Blog Title"
              name="title"
              placeholder="Enter a catchy title for your post"
              fullWidth
              variant="outlined"
              margin="normal"
              value={post.title}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  borderRadius: "8px",
                },
              }}
            />

            {/* Description Input */}
            <TextField
              label="Blog Description"
              name="description"
              placeholder="Write an engaging description..."
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={6}
              value={post.description}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  borderRadius: "8px",
                },
              }}
            />

            {/* Publish Button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#141e30",
                  color: "#fff",
                  fontSize: "16px",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#243b55",
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Publish Post
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CreatePost;
