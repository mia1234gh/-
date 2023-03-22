import { Box, Button, TextField } from "@mui/material";
import { Formik } from 'formik';
import  * as yup from "yup";
import{ useMediaQuery }from "@mui/material";
import Header from "../../components/Header";



const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

  return (
      <Box m="20px">
          <Header title="新增用户" subTitle="新增用户画像" />
          
          <Formik onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}>
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <Box display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}>
                          <TextField fullWidth variant="filled" type="text" label="名字" onBlur={handleBlur} onChange={handleChange} value={values.firstName} name="firstName" error={!!touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} sx={{ gridColumn: "span 2" }} />
                          <TextField fullWidth variant="filled" type="text" label="姓氏" onBlur={handleBlur} onChange={handleChange} value={values.lastName} name="lastName" error={!!touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} sx={{ gridColumn: "span 2" }} />
                          <TextField fullWidth variant="filled" type="text" label="邮箱" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} sx={{ gridColumn: "span 4" }} />
                          <TextField fullWidth variant="filled" type="text" label="电话" onBlur={handleBlur} onChange={handleChange} value={values.contact} name="contact" error={!!touched.contact && !!errors.contact} helperText={touched.contact&& errors.contact} sx={{ gridColumn: "span 4" }} />
                          <TextField fullWidth variant="filled" type="text" label="地址1" onBlur={handleBlur} onChange={handleChange} value={values.address1} name="address1" error={!!touched.address1 && !!errors.address1} helperText={touched.address1 && errors.address1} sx={{ gridColumn: "span 4" }} />
                          <TextField fullWidth variant="filled" type="text" label="地址2" onBlur={handleBlur} onChange={handleChange} value={values.address2} name="address2" error={!!touched.address2 && !!errors.address2} helperText={touched.address2 && errors.address2} sx={{gridColumn:"span 4"}} />
                      </Box>

                      {/* 创建按钮 */}
                      <Box display="flex" justifyContent="end" mt="20px">
                          <Button type="submit" color="secondary" variant="contained">
                              新增用户
                          </Button>
                      </Box>
                  </form>
              )}
          </Formik>
   </Box>
  )
}

// 正则表达式 RegExp验证手机号码和邮箱是否有效
const phoneRegExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

const emailRegExp = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: ""
};

const checkoutSchema = yup.object().shape({
    firstName: yup.string().max(20,"太长").required("必填"),
    lastName: yup.string().required("必填"),
    email: yup.string().matches(emailRegExp,"邮箱无效").required("必填"),
    contact: yup.string().matches(phoneRegExp, "号码无效").required("必填"),
    address1: yup.string().required("必填"),
    address2: yup.string().required("必填"),
});

export default Form