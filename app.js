const express = require('express')
const mongoOp = require("./mongo")
const app = express()
const router = express.Router()

// router.post('/add-user', async (req, res) => {
//     const { first_name, last_name, email, gender, ip_address } = req.body;
  
//     if (!first_name || !last_name || !email || !gender || !ip_address) {
//       return res.json({
//         error: true,
//         message: "All fields are required",
//       });
//     }
  
//     try {
//       const newUser = new mongoOp({
//         first_name,
//         last_name,
//         email,
//         gender,
//         ip_address,
//       });
  
//       const savedUser = await newUser.save(); // Lưu người dùng vào cơ sở dữ liệu
//       return res.json({
//         error: false,
//         message: "User added successfully",
//         user: savedUser,
//       });
//     } catch (err) {
//       return res.json({
//         error: true,
//         message: "Error adding user",
//       });
//     }
//   });
  

router.get('/users', async (req, res) => {
    const pageNo = parseInt(req.query.pageNo);
    const size = parseInt(req.query.size);
  
    if (pageNo < 1) {
      return res.json({
        error: true,
        message: "Invalid page number, should start with 1",
      });
    }
  
    const skip = size * (pageNo - 1); // Tính số tài liệu cần bỏ qua
    const limit = size; // Số tài liệu cần lấy
  
    try {
      const data = await mongoOp.find({}).skip(skip).limit(limit); 
      return res.json({
        error: false,
        message: data,
      });
    } catch (err) {
      return res.json({
        error: true,
        message: "Error fetching data",
      });
    }
  });  

app.use('/api',router)
app.listen(3000)
