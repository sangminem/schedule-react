import { css } from "@emotion/react";
import { Col, Row } from "react-bootstrap";
import { Input } from "../atoms/input/Input";
import { Button } from "../atoms/button/Button";
import { useRouter } from "next/router";

export const SignInForm = () => {
  const groupBtnStyle = css`
    width: 100%;
    text-align: center;
  `;

  const router = useRouter();

  const signInClickHandler = () => {
    alert("일정 페이지로 임시 이동");
    router.replace('/schedule');
  }
  const findPasswordClickHandler = () => {
    alert("Find Password 구현 예정");
  }
  const signUpClickHandler = () => {
    router.push('/signup');
  }

  return (
    <div className="sign-in-form">
      <style>
        {`
          .sign-in-form .row {
            min-height: 70px;
          }
  
          .sign-in-form .col {
            margin: auto;
          }
        `}
      </style>
      <Row>
        <Col>
          <Input placeholder="Email" type="email"></Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input placeholder="Password" type="password"></Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button align="right" primary onClick={signInClickHandler}>
            Sign In
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div css={groupBtnStyle}>
            <Button onClick={findPasswordClickHandler}>Find Password</Button>
            <Button onClick={signUpClickHandler}>Sign Up</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}