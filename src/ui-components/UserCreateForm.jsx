/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    avatar: "",
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
    website: "",
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
    email: "",
    profileUrl: "",
  };
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [username, setUsername] = React.useState(initialValues.username);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [facebookLink, setFacebookLink] = React.useState(
    initialValues.facebookLink
  );
  const [instagramLink, setInstagramLink] = React.useState(
    initialValues.instagramLink
  );
  const [twitterLink, setTwitterLink] = React.useState(
    initialValues.twitterLink
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [profileUrl, setProfileUrl] = React.useState(initialValues.profileUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAvatar(initialValues.avatar);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setUsername(initialValues.username);
    setBio(initialValues.bio);
    setWebsite(initialValues.website);
    setFacebookLink(initialValues.facebookLink);
    setInstagramLink(initialValues.instagramLink);
    setTwitterLink(initialValues.twitterLink);
    setEmail(initialValues.email);
    setProfileUrl(initialValues.profileUrl);
    setErrors({});
  };
  const validations = {
    avatar: [],
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    username: [{ type: "Required" }],
    bio: [],
    website: [],
    facebookLink: [],
    instagramLink: [],
    twitterLink: [],
    email: [{ type: "Required" }, { type: "Email" }],
    profileUrl: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          avatar,
          firstName,
          lastName,
          username,
          bio,
          website,
          facebookLink,
          instagramLink,
          twitterLink,
          email,
          profileUrl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new User(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar: value,
              firstName,
              lastName,
              username,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName: value,
              lastName,
              username,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName: value,
              username,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username: value,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio: value,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio,
              website: value,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="Facebook link"
        isRequired={false}
        isReadOnly={false}
        value={facebookLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio,
              website,
              facebookLink: value,
              instagramLink,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.facebookLink ?? value;
          }
          if (errors.facebookLink?.hasError) {
            runValidationTasks("facebookLink", value);
          }
          setFacebookLink(value);
        }}
        onBlur={() => runValidationTasks("facebookLink", facebookLink)}
        errorMessage={errors.facebookLink?.errorMessage}
        hasError={errors.facebookLink?.hasError}
        {...getOverrideProps(overrides, "facebookLink")}
      ></TextField>
      <TextField
        label="Instagram link"
        isRequired={false}
        isReadOnly={false}
        value={instagramLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio,
              website,
              facebookLink,
              instagramLink: value,
              twitterLink,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.instagramLink ?? value;
          }
          if (errors.instagramLink?.hasError) {
            runValidationTasks("instagramLink", value);
          }
          setInstagramLink(value);
        }}
        onBlur={() => runValidationTasks("instagramLink", instagramLink)}
        errorMessage={errors.instagramLink?.errorMessage}
        hasError={errors.instagramLink?.hasError}
        {...getOverrideProps(overrides, "instagramLink")}
      ></TextField>
      <TextField
        label="Twitter link"
        isRequired={false}
        isReadOnly={false}
        value={twitterLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink: value,
              email,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.twitterLink ?? value;
          }
          if (errors.twitterLink?.hasError) {
            runValidationTasks("twitterLink", value);
          }
          setTwitterLink(value);
        }}
        onBlur={() => runValidationTasks("twitterLink", twitterLink)}
        errorMessage={errors.twitterLink?.errorMessage}
        hasError={errors.twitterLink?.hasError}
        {...getOverrideProps(overrides, "twitterLink")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email: value,
              profileUrl,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Profile url"
        isRequired={true}
        isReadOnly={false}
        value={profileUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              avatar,
              firstName,
              lastName,
              username,
              bio,
              website,
              facebookLink,
              instagramLink,
              twitterLink,
              email,
              profileUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.profileUrl ?? value;
          }
          if (errors.profileUrl?.hasError) {
            runValidationTasks("profileUrl", value);
          }
          setProfileUrl(value);
        }}
        onBlur={() => runValidationTasks("profileUrl", profileUrl)}
        errorMessage={errors.profileUrl?.errorMessage}
        hasError={errors.profileUrl?.hasError}
        {...getOverrideProps(overrides, "profileUrl")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
