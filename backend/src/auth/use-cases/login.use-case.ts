import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { FindUserByEmailRepository } from "../repository";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "../dto/login.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
 export class RegisterUseCase {
    constructor(
        private readonly findUserByEmailRepository: FindUserByEmailRepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger,
    ){}
    
    async execute(data: LoginDto){ // !
            this.logger.log('Searching user ...');
         
    const emailExs = await this.findUserByEmailRepository.findByEmail(//busca por email e retorna todos os outros dados 
        data.email,
    );
     
    if(!emailExs){
       throw new UnauthorizedException('Invalid credentials'); 
    }

    const Compare = await bcrypt.compare(data.password,emailExs.passwordHash)
    if(!Compare){
       throw new UnauthorizedException('Invalid credentials'); 
    }

    const payload = {sub: emailExs.id , email: emailExs.email};
    const acessToken = this.jwtService.sign(payload); //JWT - serviço de criação de token

    this.logger.log('User logged successfully !');

    return {acessToken, payload}


}}