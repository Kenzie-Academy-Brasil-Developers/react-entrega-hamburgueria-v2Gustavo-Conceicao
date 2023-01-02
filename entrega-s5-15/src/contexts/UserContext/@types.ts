import React from "react";

export interface iChildren {
    children: React.ReactNode;
}


export interface iUserLogin {
    accessToken: string;
    user: iUser;
  }

export interface iUserRegister {
    email: string;
    password: string;
    name: string;
  }

export interface iUser {
    id: string;
    name: string;
    email: string;
  }