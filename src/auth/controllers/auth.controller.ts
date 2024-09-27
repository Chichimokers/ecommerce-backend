import { Body, Controller, Get, Post, HttpException, UnauthorizedException } from '@nestjs/common';
import { LoginBody } from '../../DTO/Login';
import { AuthService } from '../service/auth/auth.service';
import { Users } from '../user.entity';

@Controller("auth")
export class AuthController {
  constructor(private authservice :AuthService) {

  }

  @Post("/login")
  async Login(@Body() logindata : LoginBody): Promise<string> {
    try{
   const resultlogin = await this.authservice.validateUser(logindata.username,logindata.password);
   if(resultlogin != null ){
    return JSON.stringify(await this.authservice.login(resultlogin));
   }else{
    return JSON.stringify({error:"login error some parameter are incorrects"});
   }
   
  }catch(UnauthorizedException){
    return JSON.stringify({"error":UnauthorizedException})
  
  }

  }


  @Post("/singup")
  async SingUp(@Body() logindata : LoginBody): Promise<string> {
    try{

   
    const newuser = new Users()
    newuser.username = logindata.username;
    newuser.password = logindata.password;
    newuser.role = "Client";
    const signupresult = await this.authservice.signup(newuser);

    if(signupresult != null) {
     return JSON.stringify({message:"SignUp susefully",User:signupresult})

    }else{
      return JSON.stringify({error:"Error creating the user"})
    }

  }catch(UnauthorizedException){
    return JSON.stringify({"error":UnauthorizedException})
  
  }
    

}

}