import { useContext, useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";
import Com from "./Com"

const Mac = () => { 
    return (   
      <Com > 
      <h1>Welcome to Mac Book</h1>
      </Com>         
) 
}
  export default Mac;