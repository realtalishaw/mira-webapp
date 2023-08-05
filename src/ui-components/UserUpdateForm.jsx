/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
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
    uploads: [],
    test: "",
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
  const [uploads, setUploads] = React.useState(initialValues.uploads);
  const [test, setTest] = React.useState(initialValues.test);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setAvatar(cleanValues.avatar);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setUsername(cleanValues.username);
    setBio(cleanValues.bio);
    setWebsite(cleanValues.website);
    setFacebookLink(cleanValues.facebookLink);
    setInstagramLink(cleanValues.instagramLink);
    setTwitterLink(cleanValues.twitterLink);
    setEmail(cleanValues.email);
    setProfileUrl(cleanValues.profileUrl);
    setUploads(cleanValues.uploads ?? []);
    setCurrentUploadsValue("");
    setTest(cleanValues.test);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const [currentUploadsValue, setCurrentUploadsValue] = React.useState("");
  const uploadsRef = React.createRef();
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
    uploads: [],
    test: [],
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
          uploads,
          test,
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
          await DataStore.save(
            User.copyOf(userRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserUpdateForm")}
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
              uploads,
              test,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
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
              profileUrl,
              uploads: values,
              test,
            };
            const result = onChange(modelFields);
            values = result?.uploads ?? values;
          }
          setUploads(values);
          setCurrentUploadsValue("");
        }}
        currentFieldValue={currentUploadsValue}
        label={"Uploads"}
        items={uploads}
        hasError={errors?.uploads?.hasError}
        errorMessage={errors?.uploads?.errorMessage}
        setFieldValue={setCurrentUploadsValue}
        inputFieldRef={uploadsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Uploads"
          isRequired={false}
          isReadOnly={false}
          value={currentUploadsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.uploads?.hasError) {
              runValidationTasks("uploads", value);
            }
            setCurrentUploadsValue(value);
          }}
          onBlur={() => runValidationTasks("uploads", currentUploadsValue)}
          errorMessage={errors.uploads?.errorMessage}
          hasError={errors.uploads?.hasError}
          ref={uploadsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "uploads")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Test"
        isRequired={false}
        isReadOnly={false}
        value={test}
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
              profileUrl,
              uploads,
              test: value,
            };
            const result = onChange(modelFields);
            value = result?.test ?? value;
          }
          if (errors.test?.hasError) {
            runValidationTasks("test", value);
          }
          setTest(value);
        }}
        onBlur={() => runValidationTasks("test", test)}
        errorMessage={errors.test?.errorMessage}
        hasError={errors.test?.hasError}
        {...getOverrideProps(overrides, "test")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
