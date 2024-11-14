import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [{ username: 'Hilmi', email: 'nNpZG@example.com' },
    { username: 'Deniz Tekin', email: 'deniztekin@example.com' },
    { username: 'Nahide Babashlı', email: 'nahidebabasli@example.com' },
    ];
    fetchUsers(){
        return this.fakeUsers
    }

    createUser(userDetails: CreateUserType){
        this.fakeUsers.push(userDetails)
        return;
    }

    FetchUserById(id: number){
        return { id, username: 'Hilmi', email: 'nNpZG@example.com' }
    }
}
