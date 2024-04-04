
import { object, string } from 'yup';


export const useSignup = () => {
  const toast = useToast();
  const router = useRouter();

  
  const state = reactive({
    email:'',
    password:'',
    confirmPassword:'',
    fullName:'',
  })

  const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
      // fullName: string().required('Required'),
    
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
    state,
    schema,
    signup
  }

}