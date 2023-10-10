import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeightSpacer, ReusableBtn, WidthSpacer } from "../../components";

const validateSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Require"),
  email: Yup.string().email("Provide a valid email").required("Required"),
});

const Signin = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validateSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldError,
          setFieldTouched,
        }) => (
          <View>
            {/* Email input */}
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View
                style={styles.inputWrapper(
                  touched.email ? COLORS.lightBlue : COLORS.lightGrey
                )}
              >
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  color={COLORS.gray}
                />

                <WidthSpacer width={5} />

                <TextInput
                  placeholder="Enter Email"
                  onFocus={() => {
                    setFieldTouched("email");
                  }}
                  onBlur={() => {
                    setFieldTouched("email", "");
                  }}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1 }}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
            </View>

            {/* Password input */}
            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View
                style={styles.inputWrapper(
                  touched.password ? COLORS.lightBlue : COLORS.lightGrey
                )}
              >
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={20}
                  color={COLORS.gray}
                />

                <WidthSpacer width={5} />

                <TextInput
                  secureTextEntry={obsecureText}
                  placeholder="Enter Password"
                  onFocus={() => {
                    setFieldTouched("password");
                  }}
                  onBlur={() => {
                    setFieldTouched("password", "");
                  }}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1 }}
                />

                <TouchableOpacity
                  onPress={() => {
                    setObsecureText(!obsecureText);
                  }}
                >
                  <MaterialCommunityIcons
                    name={obsecureText ? "eye-off-outline" : "eye-outline"}
                    size={18}
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
            </View>
            <HeightSpacer height={20} />

            {/* Button Submit */}
            <ReusableBtn
              onPress={handleSubmit}
              btnText={"SIGN IN"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              boderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signin;
