import { colorStyle, gridAutoRows } from "styled-system";
import {signupAPI} from '../api/signup';
import validator from 'validator';
import axios from 'axios';

export function preReqCheck(fields) {
  let res = {};
  let newErrors = {};
  for (var key in fields) {
    if (fields[key] === '') newErrors[key] = true;
  }
  if (Object.entries(newErrors).length !== 0) {
    res['problem'] = 'incompleteFields';
    res['newErrors'] = newErrors;
    return res;
  }
  if (!validator.isEmail(fields['email'])) {
    console.log('hoooy')
    res['problem'] = 'invalidEmail';
    newErrors['email'] = true;
    res['newErrors'] = newErrors;
    return res;
  }
  if (fields['password'] !== fields['confirmPassword']) {
    res['problem'] = 'passwordsNotSame';
    newErrors['confirmPassword'] = true;
    res['newErrors'] = newErrors;
    return res;
  }
  return {
    newErrors: {
      nameFa: false,
      lastNameFa: false,
      nameEn: false,
      lastNameEn: false,
      userName: false,
      email: false,
      birthDate: false,
      university: false,
      password: false,
      confirmPassword: false,
    },
  };
}

export async function reqSignup(fields) {
  let data = {
    username: fields['userName'],
    email: fields['email'],
    password_1: fields['password'],
    password_2: fields['confirmPassword'],
    profile: {
        firstname_fa: fields['nameFa'],
        firstname_en: fields['lastNameFa'],
        lastname_fa: fields['nameEn'],
        lastname_en: fields['lastNameEn'],
        birth_date: fields['birthDate'],
        university: fields['university']
    }
  }
  // const res = await fetch(signupAPI(), {
  //   method : 'POST',
  //   headers : {
  //     'Content-Type' : 'application/json',
  //     'Accept' : 'application/json'
  //   },
  //   body : JSON.stringify(data)
  // })
  // const content = await res.json()
  console.log(data)
  const res = axios.post(signupAPI(), data)
  console.log(res)
}