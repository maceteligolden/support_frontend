import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function HelpForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const HelpSchema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    description: Yup.string().required('Description is required'),

  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(HelpSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>

        <RHFTextField 
          name="firstname" 
          label="First Name"
          type="text"
          />
        
        <RHFTextField 
          name="lastname" 
          label="Last Name"
          type="text"
        />

        <RHFTextField 
          name="phone" 
          label="Phone Number"
          type="tel"
        />

        <RHFTextField name="email" label="Email address" />

        <RHFTextField 
          name="description" 
          label="Description"
          type="text"
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Submit Request
        </LoadingButton>

      </Stack>

    </FormProvider>
  );
}
