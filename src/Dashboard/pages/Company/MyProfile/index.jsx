import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../../../App/auth';
import { saveProfile, saveProfilePicture } from './store/actions';
import { ImagePreview } from './components/ImagePreview';
import ProfileForm from './components/ProfileForm';
import { getProfile } from './store/actions';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const UserProfiles = useSelector((state) => state.companyGetUser.response);

  useEffect(() => {
    dispatch(getProfile(currentUser.id));
  }, [dispatch, currentUser]);


  const handleProfilePicture = (data) => {
    const formData = new FormData();
    formData.append('image', data.image);
    dispatch(saveProfilePicture(formData, currentUser.id));
  };

  const handleProfileForm = (data) => {
    dispatch(saveProfile(data, currentUser.id));
  };

  const handleRender = (data) => (
    <>
      <ImagePreview
        onSubmit={handleProfilePicture}
        url={data?.image}
        form={`OwnEditForm_Image`}
        initialValues={{ user_id: data?.id }}
      />
      <ProfileForm
        onSubmit={handleProfileForm}
        form={`dataOwnForm_Edit`}
        initialValues={{
          full_name: data?.full_name,
          gender: data?.gender,
          address: data?.address,
          email: data?.email,
          phone_number: data?.phone_number,
          state: data?.state,
          country: data?.country,
          city: data?.city,
          zip_code: data?.zip_code,
        }}
      />
    </>
  );

  return (
    <>
      {handleRender(UserProfiles?.data)}
    </>
  );
};

export default MyProfile;
