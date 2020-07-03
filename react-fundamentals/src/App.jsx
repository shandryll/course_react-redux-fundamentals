import React from "react";

import Card from "./components//layout/Card";
import Challenge_Product from './components/repetition/Challenge_Products';
import Challenge_RandomNumber from "./components/basics/Challenge_RandomNumber";
import Counter from './components/counter/Counter';
import DirectDad from './components/comunication/DirectDad';
import EvenOdd from './components/conditional/EvenOdd';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import First from "./components/basics/First";
import Fragment from "./components/basics/Fragment";
import Mega from './components/mega/Mega';
import IndirectDad from './components/comunication/IndirectDad';
import Input from './components/forms/Input';
import StudentsList from './components/repetition/StudentsList';
import UserInfo from './components/conditional/UserInfo';
import WithParameters from "./components/basics/WithParameters";
import './App.css';

export default () => {
  return (
    <div className="App">
      <h1>Fundamentals React</h1>

      <div className="Cards">
        <Card title="#14 - Challenge Mega Sena" color="#a5a48a">
          <Mega></Mega>
        </Card>

        <Card title="#13 - Counter" color="#aff631">
          <Counter initialNumber={10}></Counter>
        </Card>

        <Card title="#12 - Controlled Components" color="#a5b631">
          <Input></Input>
        </Card>

        <Card title="#11 - Indirect Comunication" color="#231321">
          <IndirectDad></IndirectDad>
        </Card>

        <Card title="#10 - Direct Comunication" color="#321321">
          <DirectDad></DirectDad>
        </Card>

        <Card title="#09 - User Info" color="#987987">
          <UserInfo user={{ name:'Shandryll' }}></UserInfo>
          <UserInfo user={{ email:'sh@ndryll' }}></UserInfo>
        </Card>

        <Card title="#08 - Even or Odd" color="#654654">
          <EvenOdd number={8}></EvenOdd>
        </Card>

        <Card title="#07 - Challenge Products" color="#456456">
          <Challenge_Product></Challenge_Product>
        </Card>

        <Card title="#06 - Student List" color="#789789">
          <StudentsList></StudentsList>
        </Card>

        <Card title="#05 - Family and Member Family" color="#123132">
          <Family lastname="Ferreira">
            <FamilyMember name="Pedro"></FamilyMember>
            <FamilyMember name="Ana"></FamilyMember>
            <FamilyMember name="Gustavo"></FamilyMember>
          </Family>
        </Card>

        <Card title="#04 - Challenge Random Number" color="#080">
          <Challenge_RandomNumber min={1} max={60}></Challenge_RandomNumber>
        </Card>

        <Card title="#03 - Fragment" color="#FA6900">
          <Fragment></Fragment>
        </Card>

        <Card title="#02 - With Parameters" color="#E94C6F">
          <WithParameters title="Second Component" subtitle="Very cool!" year={2020}></WithParameters>
        </Card>

        <Card title="#01 - First Component" color="#E8B71A">
          <First></First>
        </Card>
      </div>

    </div>
  );
};
