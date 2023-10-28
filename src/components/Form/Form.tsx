import { useForm, SubmitHandler } from "react-hook-form"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

type Inputs = {
  email: string
  age: number
  password: string
}


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "sa@gmail.com",
      age: 29,
      password:"",
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("email")) // watch input value by passing the name of it
  
  return (
    <div style={{display: 'flex',flex:1, flexDirection:'column', maxWidth:'500px'}}>
      <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex',flex:1, flexDirection:'column'}}>
        
        <TextField  
          {...register("email",
            {
              required:{
                value: true,
                message: 'Email is required'
              }
            }
          )}  
          label="Email" variant="filled" 
          style={{marginBottom:'16px'}} 
        />    

        {/* Email Error message */}
        {errors.email && <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
        {errors.email.message}
        </Alert>   }         

        <TextField  {...register("age")}  
          label="Age" 
          variant="filled" 
          style={{marginBottom:'16px'}} 
        />      
      

        <TextField  {...register("password", 
            {
              required: {
                value:true,
                message:'this field is very required'
              }
            }
          )}  

          label="Password" 
          variant="filled" 
          style={{marginBottom:'16px'}} 
        />

        {errors.password && <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
        {errors.password.message}
        </Alert>   }   



        <Button type='submit' variant="contained" color="success">
          Send
        </Button>
      </form>
    </div>
   
  )
}
