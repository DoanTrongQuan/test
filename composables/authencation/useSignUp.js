
import * as Yup from 'yup';
export const useSignup = () => {
  const toast = useToast();
  const router = useRouter();

  
  const userRegister = reactive({
    email:'',
    password:'',
    confirmPassword:'',
    fullName:'',
  })


  const validation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),

    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),

    fullName: Yup.string().required('Full Name is required'),
  });
  
  
  const signup = async (email, password) => {
    try {
      await authAsync.createUserWithEmailAndPassword(email, password);
      toast.success("Account created");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return {
    userRegister,
    validation,
    signup
  }

}